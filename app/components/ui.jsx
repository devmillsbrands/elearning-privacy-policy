/*
  Shared visual building blocks, styled with Tailwind utility classes.
  Change how something looks across the whole training by editing it here
  once, instead of hunting through every module file.
*/

export function Eyebrow({ children }) {
  return (
    <span className="inline-block text-[12.5px] text-accent-dark bg-accent-soft px-2.5 py-1 rounded-full mb-3.5">
      {children}
    </span>
  );
}

export function Lede({ children }) {
  return <p className="text-[17px] text-ink-soft max-w-[58ch]">{children}</p>;
}

export function Badge({ children }) {
  return (
    <span className="font-mono text-xs bg-surface-alt text-ink-soft px-2.5 py-1 rounded-full">
      {children}
    </span>
  );
}

const calloutBorder = {
  accent: "border-l-accent",
  warn: "border-l-warn",
  danger: "border-l-danger",
};
const calloutLabelColor = {
  accent: "text-accent-dark",
  warn: "text-warn",
  danger: "text-danger",
};

export function Callout({ variant = "accent", label, children }) {
  return (
    <div
      className={`bg-surface border border-border border-l-[3px] ${calloutBorder[variant]} rounded-[10px] px-5 py-[18px] my-[22px]`}
    >
      {label && (
        <div className={`font-mono text-[11px] tracking-wide mb-1.5 ${calloutLabelColor[variant]}`}>
          {label}
        </div>
      )}
      <div className="[&>p:last-child]:mb-0">{children}</div>
    </div>
  );
}

export function CardGrid({ children }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-[18px] mb-[26px]">{children}</div>;
}

export function PillarCard({ kicker, title, children }) {
  return (
    <div className="bg-surface border border-border rounded-[10px] p-[18px] pb-4">
      {kicker && <span className="block font-mono text-xs text-accent-dark mb-2">{kicker}</span>}
      {title && <h4 className="text-[15px] mb-1">{title}</h4>}
      {children}
    </div>
  );
}

export function DoDont({ doTitle = "Do", dontTitle = "Don't", doItems = [], dontItems = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3.5">
      <div className="bg-accent-soft rounded-[10px] px-4 py-3.5">
        <h5 className="font-mono text-[12.5px] text-accent-dark mb-2">{doTitle}</h5>
        <ul className="list-none p-0 m-0 text-sm text-ink space-y-1.5">
          {doItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-danger-soft rounded-[10px] px-4 py-3.5">
        <h5 className="font-mono text-[12.5px] text-danger mb-2">{dontTitle}</h5>
        <ul className="list-none p-0 m-0 text-sm text-ink space-y-1.5">
          {dontItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Flow({ children }) {
  return <div className="flex flex-col sm:flex-row items-stretch gap-2 my-5 mb-7 flex-wrap">{children}</div>;
}

export function FlowStep({ num, title, children }) {
  return (
    <div className="flex-1 min-w-[140px] bg-surface border border-border rounded-[10px] p-3.5">
      <span className="block font-mono text-[11px] text-accent-dark mb-1.5">{num}</span>
      <h5 className="text-[14.5px] font-bold text-ink mb-1">{title}</h5>
      <p className="text-[13px] m-0">{children}</p>
    </div>
  );
}

export function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-ink-faint text-lg py-0.5 rotate-90 sm:rotate-0 sm:py-0 sm:px-0.5">
      →
    </div>
  );
}

export function InfoTable({ rows }) {
  const tone = { yes: "text-accent-dark font-semibold", maybe: "text-warn font-semibold", no: "text-ink-faint" };
  return (
    <table className="w-full border-collapse my-[18px] mb-[26px] text-[14.5px]">
      <tbody>
        <tr>
          <th className="text-left px-3 py-2.5 border-b border-border text-ink-faint font-semibold text-xs">
            Information
          </th>
          <th className="text-left px-3 py-2.5 border-b border-border text-ink-faint font-semibold text-xs">
            Personal information?
          </th>
        </tr>
        {rows.map(([label, cls, text]) => (
          <tr key={label}>
            <td className="px-3 py-2.5 border-b border-border">{label}</td>
            <td className={`px-3 py-2.5 border-b border-border ${tone[cls]}`}>{text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ---------- Quiz building blocks (used by Scenarios and Assessment) ---------- */

function optionClasses(state) {
  const base =
    "text-left px-3.5 py-[11px] rounded-lg border font-body text-sm text-ink flex gap-2.5 transition-colors duration-150";
  switch (state) {
    case "correct":
      return `${base} border-accent bg-accent-soft cursor-default`;
    case "incorrect":
      return `${base} border-danger bg-danger-soft cursor-default`;
    case "locked":
      return `${base} border-border bg-surface cursor-default`;
    default:
      return `${base} border-border bg-surface hover:border-accent hover:bg-accent-soft cursor-pointer`;
  }
}

const letterClasses = {
  correct: "font-mono font-bold text-accent-dark flex-shrink-0",
  incorrect: "font-mono font-bold text-danger flex-shrink-0",
  locked: "font-mono font-bold text-ink-faint flex-shrink-0",
  idle: "font-mono font-bold text-ink-faint flex-shrink-0",
};

export function QuizOptions({ options, correctId, selected, onSelect }) {
  return (
    <div className="flex flex-col gap-2 mb-1">
      {options.map((opt) => {
        let state = "idle";
        if (selected) {
          if (opt.id === correctId) state = "correct";
          else if (opt.id === selected) state = "incorrect";
          else state = "locked";
        }
        return (
          <button
            key={opt.id}
            disabled={!!selected}
            onClick={() => onSelect(opt.id)}
            className={optionClasses(state)}
          >
            <span className={letterClasses[state]}>{opt.id.toUpperCase()}</span>
            <span>{opt.text}</span>
          </button>
        );
      })}
    </div>
  );
}

export function QuizFeedback({ correct, correctText = "Correct.", incorrectText = "Not quite.", children }) {
  return (
    <div
      className={`mt-3.5 px-[15px] py-[13px] rounded-lg text-[13.5px] ${
        correct ? "bg-accent-soft text-accent-dark" : "bg-danger-soft text-danger"
      }`}
    >
      <strong className="block mb-1">{correct ? correctText : incorrectText}</strong>
      {children}
    </div>
  );
}

export function QuizCard({ kicker, situation, children }) {
  return (
    <div className="bg-surface border border-border rounded-[10px] px-6 py-[22px] mb-[22px]">
      {kicker && <span className="block font-mono text-xs text-accent-dark mb-2">{kicker}</span>}
      {situation && (
        <div className="bg-surface-alt rounded-lg px-3.5 py-3 text-[13.5px] text-ink-soft mb-3.5">
          {situation}
        </div>
      )}
      {children}
    </div>
  );
}

/* ---------- Step navigation buttons ---------- */

export function StepButton({ primary, children, ...props }) {
  const base =
    "font-body text-sm font-semibold px-[18px] py-2.5 rounded-lg border flex items-center gap-2 transition-colors duration-150 disabled:opacity-35 disabled:cursor-default";
  const style = primary
    ? "bg-accent border-accent text-white hover:bg-accent-dark disabled:hover:bg-accent"
    : "bg-surface border-border text-ink hover:border-ink-faint disabled:hover:border-border";
  return (
    <button className={`${base} ${style}`} {...props}>
      {children}
    </button>
  );
}
