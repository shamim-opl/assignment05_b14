import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechCard from "./TechCard";
import YourStack from "./YourStack";

export default function TechGrid() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <section id="technologies" className="scroll-mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
        Explore the <span className="text-gradient-brand">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-500">Pick the tools you want to compare and build your ideal stack.</p>

      {loading ? (
        <div
          role="status"
          aria-live="polite"
          className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-400"
        >
          <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-pink-500 animate-spin" />
          <p className="text-sm">Loading technologies…</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>

          <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      )}
    </section>
  );
}
