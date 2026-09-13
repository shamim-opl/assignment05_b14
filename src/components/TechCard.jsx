const CATEGORY_STYLES = {
  Frontend: "bg-sky-50 text-sky-600",
  Backend: "bg-emerald-50 text-emerald-600",
  Database: "bg-amber-50 text-amber-600",
  Language: "bg-violet-50 text-violet-600",
  Styling: "bg-cyan-50 text-cyan-600",
  DevOps: "bg-indigo-50 text-indigo-600",
  Tools: "bg-slate-100 text-slate-600",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;
  const categoryStyle = CATEGORY_STYLES[category] ?? "bg-slate-100 text-slate-600";

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <img src={icon} alt={`${name} logo`} className="h-9 w-9 object-contain" />
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-50 text-pink-600">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm text-slate-500 leading-relaxed grow">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
        <span className={`px-2 py-1 rounded-full font-medium ${categoryStyle}`}>
          {category}
        </span>
        <span>{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <span className="text-amber-400">★</span>
          {rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          "mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors " +
          (isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-slate-900 text-white hover:bg-slate-800")
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
