"use client";
import Image from "next/image";

export default function Sidebar({
  modules,
  currentIndex,
  visited,
  onSelect,
  onReset,
  mobileOpen,
}) {
  return (
    <aside
      className={`fixed nav:sticky top-0 left-0 h-screen w-72 flex-shrink-0 z-40 nav:z-auto
        bg-surface border-r border-border p-7 px-[18px] overflow-y-auto
        transition-transform duration-300
        ${mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"} nav:translate-x-0 nav:shadow-none`}
    >
      <div className="px-2.5 pb-[22px] border-b border-border mb-[18px]">
        {/* <div className="w-[34px] h-[34px] rounded-lg bg-accent text-white font-display font-bold text-base flex items-center justify-center mb-3">
          P
        </div> */}
        <Image
          src="/mills_logo.svg"
          alt="Mills"
          width={100}
          height={120}
        />
        <h1 className="text-[17px] leading-snug mb-[3px]">
          Australian Privacy Awareness
        </h1>
      </div>

      <div className="px-2.5 pb-[18px]">
        <div className="flex justify-between text-xs text-ink-faint mb-1.5">
          <span>Progress</span>
          <span>
            {visited.size} / {modules.length}
          </span>
        </div>
        <div className="h-[5px] bg-surface-alt rounded overflow-hidden">
          <div
            className="h-full bg-accent rounded transition-[width] duration-400"
            style={{ width: `${(visited.size / modules.length) * 100}%` }}
          />
        </div>
      </div>

      <ul className="list-none m-0 p-0">
        {modules.map((m, i) => {
          const isActive = i === currentIndex;
          const isDone = !isActive && visited.has(m.id);
          return (
            <li key={m.id} className="mb-0.5">
              <button
                onClick={() => onSelect(i)}
                className={`w-full text-left bg-transparent border-0 cursor-pointer flex items-center gap-2.5
                  px-2.5 py-[9px] rounded-lg font-body text-[13.5px] transition-colors duration-150
                  ${
                    isActive
                      ? "bg-accent-soft text-accent-dark font-semibold"
                      : "text-ink-soft hover:bg-surface-alt hover:text-ink"
                  }`}
              >
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-mono border
                    ${
                      isActive
                        ? "bg-accent border-accent text-white text-[10.5px]"
                        : isDone
                        ? "bg-ink-faint border-ink-faint text-white text-[10px]"
                        : "bg-surface border-border text-ink-faint text-[10.5px]"
                    }`}
                >
                  {isDone ? "✓" : i + 1}
                </span>
                <span className="flex-1">{m.title}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="pt-[18px] mt-3 border-t border-border px-2.5">
        <button
          onClick={onReset}
          className="text-xs text-ink-faint underline underline-offset-2 bg-transparent border-0 cursor-pointer p-0 hover:text-danger"
        >
          Reset progress
        </button>
      </div>
    </aside>
  );
}
