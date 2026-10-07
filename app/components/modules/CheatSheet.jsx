"use client";

import { Eyebrow, Lede, Callout } from "../ui";

const cards = [
  ["BEFORE ACCESSING", "Do I need this information to do my job?"],
  ["BEFORE USING", "Am I using it for a legitimate business purpose?"],
  ["BEFORE SHARING", "Is the recipient authorised?"],
  ["BEFORE SENDING", "Have I checked the recipient and attachment?"],
  ["BEFORE EXPORTING", "Do I actually need all of this?"],
  ["BEFORE STORING", "Am I using an approved, secure location?"],
];

export default function CheatSheet() {
  return (
    <>
      <Eyebrow>Module 12 of 14</Eyebrow>
      <h2>One-page cheat sheet</h2>
      <Lede>Keep this nearby. It's the whole training in one page.</Lede>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-5">
        {cards.map(([label, text]) => (
          <div className="bg-surface border border-border rounded-[10px] px-4 py-3.5" key={label}>
            <h5 className="font-mono text-[13px] text-accent-dark mb-1.5">{label}</h5>
            <p className="m-0 text-sm text-ink">{text}</p>
          </div>
        ))}
      </div>
      <Callout variant="danger" label="NEVER">
        <p>
          Access out of curiosity · share passwords · send to unauthorised people · store
          unnecessarily · use unapproved services · post in public channels · hide a mistake
        </p>
      </Callout>
      <Callout label="ALWAYS">
        <p>
          Use information only when needed · protect it · check before sending · follow approved
          processes · report suspected incidents immediately · ask when unsure
        </p>
      </Callout>
      <p className="text-center font-semibold mt-5 text-ink">When in doubt — stop and ask.</p>
      <div className="text-center">
        <button
          onClick={() => window.print()}
          className="print:hidden inline-flex items-center gap-2 bg-ink text-white border-0 px-[18px] py-2.5 rounded-lg font-body text-[13.5px] cursor-pointer hover:bg-accent-dark"
        >
          Print this page
        </button>
      </div>
    </>
  );
}
