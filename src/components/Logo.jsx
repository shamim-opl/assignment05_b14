export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-brand text-sm font-bold text-white">
        DS
      </span>
      <span className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
        Dev <span className="text-gradient-brand">Stack</span>
      </span>
    </span>
  );
}
