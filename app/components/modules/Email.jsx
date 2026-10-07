"use client";

import { useState } from "react";
import { Eyebrow, Lede, Flow, FlowStep, FlowArrow } from "../ui";

const items = [
  "Correct customer?",
  "Correct email address?",
  "Correct attachment?",
  "Contains only necessary information?",
  "Approved communication method?",
];

export default function Email() {
  const [checked, setChecked] = useState(() => items.map(() => false));

  function toggle(i) {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  return (
    <>
      <Eyebrow>Module 6 of 14</Eyebrow>
      <h2>Email privacy</h2>
      <Lede>
        Most privacy incidents at ESS will happen over email — one wrong click. Run through this
        checklist before you hit send.
      </Lede>
      <Flow>
        <FlowStep num="STOP" title="Is this necessary?">
          Check the information actually needs to go out.
        </FlowStep>
        <FlowArrow />
        <FlowStep num="CHECK" title="Recipient correct?">
          Confirm you're sending to the right person.
        </FlowStep>
        <FlowArrow />
        <FlowStep num="CHECK" title="Attachment correct?">
          Open it — make sure it's the right file, with nothing extra.
        </FlowStep>
        <FlowArrow />
        <FlowStep num="SEND" title="Only after verifying">
          All three checks pass, then it's safe to send.
        </FlowStep>
      </Flow>
      <h3>Try it: before-you-send checklist</h3>
      <p>Click each item as you'd tick it off before sending an invoice.</p>
      <ul className="list-none p-0 my-4 mb-[26px]">
        {items.map((text, i) => {
          const isChecked = checked[i];
          return (
            <li
              key={text}
              onClick={() => toggle(i)}
              className="flex items-start gap-2.5 px-1 py-2.5 border-b border-border last:border-0 text-[14.5px] text-ink cursor-pointer"
            >
              <span
                className={`flex-shrink-0 w-[18px] h-[18px] rounded mt-0.5 flex items-center justify-center text-xs text-white border-[1.5px] transition-colors duration-150 ${
                  isChecked ? "bg-accent border-accent" : "border-ink-faint"
                }`}
              >
                {isChecked && "✓"}
              </span>
              <span className={isChecked ? "text-ink-faint line-through decoration-border" : ""}>
                {text}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
