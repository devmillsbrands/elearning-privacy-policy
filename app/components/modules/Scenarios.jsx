"use client";

import { useState } from "react";
import { Eyebrow, Lede, QuizCard, QuizOptions, QuizFeedback } from "../ui";
import { scenarios } from "../../data";

function ScenarioCard({ scenario, index }) {
  const [selected, setSelected] = useState(null);

  return (
    <QuizCard kicker={`Scenario ${index + 1}`} situation={scenario.situation}>
      <h4>{scenario.question}</h4>
      <QuizOptions
        options={scenario.options}
        correctId={scenario.correct}
        selected={selected}
        onSelect={setSelected}
      />
      {selected && (
        <QuizFeedback
          correct={selected === scenario.correct}
          correctText="Right approach."
          incorrectText="Not quite the recommended approach."
        >
          {scenario.explanation}
        </QuizFeedback>
      )}
    </QuizCard>
  );
}

export default function Scenarios() {
  return (
    <>
      <Eyebrow>Module 7 of 14</Eyebrow>
      <h2>Scenario practice</h2>
      <Lede>
        Four real situations you might run into. Pick an answer to see how it lines up with ESS's
        expected approach.
      </Lede>
      <div>
        {scenarios.map((scenario, i) => (
          <ScenarioCard scenario={scenario} index={i} key={i} />
        ))}
      </div>
    </>
  );
}
