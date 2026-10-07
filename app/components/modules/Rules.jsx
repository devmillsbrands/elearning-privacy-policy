"use client";

import { useState } from "react";
import { Eyebrow, Lede, DoDont } from "../ui";

const rules = [
  {
    index: "01",
    title: "Collect — only what's reasonably necessary",
    body: (
      <>
        <p>
          <strong>Ask yourself:</strong> "Do we actually need this information to perform the
          task?"
        </p>
        <p>
          Example: a customer contacts us about an order. We may need the order number, their
          name, relevant contact details, and whatever's required to resolve the issue — not
          unrelated personal information on top.
        </p>
        <p>
          <strong>Remember:</strong> more information isn't better information. Collect what's
          reasonably necessary, no more.
        </p>
      </>
    ),
  },
  {
    index: "02",
    title: "Access — only what you need for your role",
    body: (
      <>
        <p>Having access to a system doesn't mean you should access everything in it.</p>
        <DoDont
          doItems={["Access the order because you're working a legitimate business request"]}
          dontItems={["Look up a customer's order out of curiosity"]}
        />
        <p>
          <strong>Ask yourself:</strong> "Why am I accessing this information?" If you can't
          explain the business reason, don't access it.
        </p>
      </>
    ),
  },
  {
    index: "03",
    title: "Use — only for an appropriate purpose",
    body: (
      <DoDont
        doTitle="Appropriate"
        dontTitle="Not appropriate"
        doItems={[
          "Resolving an order issue",
          "Processing a customer request",
          "Investigating a legitimate system issue",
          "Completing an authorised business process",
        ]}
        dontItems={[
          "Looking up friends or family",
          "Looking up customers out of curiosity",
          "Using information for personal reasons",
          'Copying it "in case you need it later"',
        ]}
      />
    ),
  },
  {
    index: "04",
    title: "Share — be careful when sharing",
    body: (
      <>
        <p>Before sending anything, check:</p>
        <ul className="list-disc pl-[22px] text-ink-soft space-y-1.5">
          <li>
            <strong>Who</strong> am I sending it to?
          </li>
          <li>
            <strong>Why</strong> am I sending it?
          </li>
          <li>
            <strong>What</strong> information am I sending?
          </li>
          <li>
            <strong>How</strong> am I sending it?
          </li>
        </ul>
        <p>
          Example: sending an invoice. Before you press send — correct customer? correct email?
          correct attachment? only necessary information? approved communication method?
        </p>
      </>
    ),
  },
  {
    index: "05",
    title: "Protect — keep it secure",
    body: (
      <>
        <p>
          APP 11 requires reasonable steps to protect personal information from misuse, loss,
          unauthorised access, modification or disclosure — and to deal with it appropriately once
          it's no longer needed.
        </p>
        <DoDont
          doTitle="Everyday protection"
          doItems={[
            "Lock your computer",
            "Protect passwords",
            "Use approved systems",
            "Use appropriate access permissions",
            "Check recipients",
            "Secure exported files",
          ]}
          dontItems={[
            "Share passwords",
            "Leave customer information exposed",
            "Download unnecessary customer data",
            "Store data in unauthorised locations",
            "Send information through personal accounts",
          ]}
        />
      </>
    ),
  },
];

export default function Rules() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Eyebrow>Module 4 of 14</Eyebrow>
      <h2>The five golden rules</h2>
      <Lede>
        Almost every privacy decision at ESS comes down to one of these five. Open each one for
        the everyday version.
      </Lede>
      <div className="my-[18px] mb-[26px]">
        {rules.map((rule, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={rule.index}
              className="border border-border rounded-[10px] mb-2.5 overflow-hidden bg-surface"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-3 px-[18px] py-[15px] bg-transparent border-0 cursor-pointer text-left font-body text-[15px] font-semibold text-ink"
              >
                <span>
                  <span className="font-mono text-xs text-accent-dark mr-2.5">{rule.index}</span>
                  {rule.title}
                </span>
                <span
                  className={`text-ink-faint flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-300"
                style={{ maxHeight: isOpen ? "900px" : "0px" }}
              >
                <div className="px-[18px] pb-[18px]">{rule.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
