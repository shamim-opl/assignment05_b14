export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="bg-white border border-slate-200 rounded-2xl p-6 h-fit lg:sticky lg:top-24">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      <p className="mt-1 text-sm text-slate-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 border border-dashed border-slate-200 rounded-xl py-10 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3"
            >
              <img src={tech.icon} alt={`${tech.name} logo`} className="h-7 w-7 object-contain" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">{tech.name}</p>
                <p className="text-xs text-slate-400">{tech.category}</p>
              </div>
              <button
                type="button"
                aria-label={`Remove ${tech.name} from stack`}
                onClick={() => onRemove(tech.id)}
                className="ml-auto text-slate-400 hover:text-slate-600 text-lg leading-none"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full border border-red-200 text-red-500 font-semibold rounded-lg py-2.5 text-sm hover:bg-red-50 transition-colors"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
