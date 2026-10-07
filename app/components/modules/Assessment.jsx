"use client";

import { useState } from "react";
import { Eyebrow, Lede, QuizCard, QuizOptions, QuizFeedback } from "../ui";
import { assessment } from "../../data";

function QuestionCard({ q, index, onAnswered }) {
  const [selected, setSelected] = useState(null);

  function handleSelect(optId) {
    if (selected) return;
    setSelected(optId);
    onAnswered(optId === q.correct);
  }

  return (
    <QuizCard kicker={`Question ${index + 1} of ${assessment.length}`}>
      <h4>{q.prompt}</h4>
      <QuizOptions
        options={q.options}
        correctId={q.correct}
        selected={selected}
        onSelect={handleSelect}
      />
      {selected && (
        <QuizFeedback correct={selected === q.correct}>{q.explanation}</QuizFeedback>
      )}
    </QuizCard>
  );
}

export default function Assessment() {
  const [answeredCount, setAnsweredCount] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswered(isCorrect) {
    setAnsweredCount((c) => c + 1);
    if (isCorrect) setScore((s) => s + 1);
  }

  const done = answeredCount === assessment.length;

  return (
    <>
      <Eyebrow>Module 13 of 14</Eyebrow>
      <h2>Final assessment</h2>
      <Lede>
        Ten questions. Answer each one to see how you did — this mirrors the assessment given
        after the live training session.
      </Lede>
      {done && (
        <div className="bg-accent text-white rounded-[10px] px-7 py-[26px] text-center mb-[26px]">
          <div className="font-display text-[42px] font-bold mb-1">
            {score} / {assessment.length}
          </div>
          <p className="text-white/85 m-0">Correct answers</p>
        </div>
      )}
      <div>
        {assessment.map((q, i) => (
          <QuestionCard q={q} index={i} key={i} onAnswered={handleAnswered} />
        ))}
      </div>
    </>
  );
}
