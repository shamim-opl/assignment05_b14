import banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Build Your Ideal
          <br />
          <span className="text-gradient-brand">Development Stack</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-lg">
          Explore frontend, backend, database, and tooling options, compare them side
          by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="bg-gradient-brand text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-full hover:border-slate-400 hover:bg-slate-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src={banner}
          alt="Illustration of a layered technology stack"
          className="w-72 sm:w-96 h-auto"
        />
      </div>
    </section>
  );
}
