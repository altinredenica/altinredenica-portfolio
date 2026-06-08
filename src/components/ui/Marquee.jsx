export default function Marquee({ items, speed = 30 }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0c0c0e] to-transparent light:from-[#fafafa]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0c0c0e] to-transparent light:from-[#fafafa]" />
      <div
        className="flex w-max gap-4"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 rounded-full border border-white/8 bg-white/4 px-5 py-2 text-sm font-medium text-zinc-400 light:border-zinc-200 light:bg-zinc-100 light:text-zinc-600"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
