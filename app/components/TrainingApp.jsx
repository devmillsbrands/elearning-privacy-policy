"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { StepButton } from "./ui";
import Welcome from "./modules/Welcome";
import Pii from "./modules/Pii";
import Apps from "./modules/Apps";
import Rules from "./modules/Rules";
import Systems from "./modules/Systems";
import Email from "./modules/Email";
import Scenarios from "./modules/Scenarios";
import Incidents from "./modules/Incidents";
import Quality from "./modules/Quality";
import CrossBorder from "./modules/CrossBorder";
import DecisionTree from "./modules/DecisionTree";
import CheatSheet from "./modules/CheatSheet";
import Assessment from "./modules/Assessment";
import Closing from "./modules/Closing";

const modules = [
  { id: "welcome", title: "Why we're doing this", Component: Welcome },
  { id: "pii", title: "What is personal information", Component: Pii },
  { id: "apps", title: "The Privacy Principles", Component: Apps },
  { id: "rules", title: "The five golden rules", Component: Rules },
  { id: "systems", title: "Where you'll encounter it", Component: Systems },
  { id: "email", title: "Email privacy", Component: Email },
  { id: "scenarios", title: "Scenario practice", Component: Scenarios },
  { id: "incidents", title: "Recognising incidents", Component: Incidents },
  { id: "quality", title: "Data quality & requests", Component: Quality },
  { id: "crossborder", title: "Cross-border information", Component: CrossBorder },
  { id: "decisiontree", title: "The decision tree", Component: DecisionTree },
  { id: "cheatsheet", title: "Cheat sheet", Component: CheatSheet },
  { id: "assessmentModule", title: "Final assessment", Component: Assessment },
  { id: "closing", title: "2026 update & closing", Component: Closing },
];

export default function TrainingApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visited, setVisited] = useState(() => new Set([modules[0].id]));
  const [mobileOpen, setMobileOpen] = useState(false);

  function goTo(i) {
    if (i < 0 || i >= modules.length) return;
    setCurrentIndex(i);
    setVisited((prev) => new Set(prev).add(modules[i].id));
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function reset() {
    setCurrentIndex(0);
    setVisited(new Set([modules[0].id]));
  }

  const CurrentComponent = modules[currentIndex].Component;

  return (
    <>
      <div className="flex nav:hidden items-center justify-between gap-3 sticky top-0 z-30 bg-surface border-b border-border px-[18px] py-3.5">
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="bg-transparent border border-border rounded-lg w-9 h-9 cursor-pointer text-ink"
        >
          ☰
        </button>
        <h1 className="text-[15px] m-0">{modules[currentIndex].title}</h1>
        <span className="w-9" />
      </div>

      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/35 z-[35] nav:hidden ${mobileOpen ? "block" : "hidden"}`}
      />

      <div className="flex min-h-screen">
        <Sidebar
          modules={modules}
          currentIndex={currentIndex}
          visited={visited}
          onSelect={goTo}
          onReset={reset}
          mobileOpen={mobileOpen}
        />
        <main className="flex-1 min-w-0">
          <div className="max-w-[740px] mx-auto px-5 pt-[34px] pb-[90px] nav:px-8 nav:pt-14 nav:pb-[100px]">
            <CurrentComponent />
            <div className="flex justify-between items-center mt-11 pt-[22px] border-t border-border">
              <StepButton disabled={currentIndex === 0} onClick={() => goTo(currentIndex - 1)}>
                ← Previous
              </StepButton>
              <StepButton primary onClick={() => goTo(currentIndex + 1)}>
                {currentIndex === modules.length - 1 ? "Done" : "Next module →"}
              </StepButton>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
