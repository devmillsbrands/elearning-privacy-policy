import { Eyebrow, Lede, CardGrid, PillarCard } from "../ui";

const principles = [
  ["APP 1", "Open & transparent management"],
  ["APP 3", "Collection"],
  ["APP 5", "Notification"],
  ["APP 6", "Use & disclosure"],
  ["APP 8", "Cross-border disclosure"],
  ["APP 10", "Quality"],
  ["APP 11", "Security"],
  ["APP 12", "Access"],
  ["APP 13", "Correction"],
];

export default function Apps() {
  return (
    <>
      <Eyebrow>Module 3 of 14</Eyebrow>
      <h2>The Australian Privacy Principles</h2>
      <Lede>
        There are 13 Australian Privacy Principles (APPs). You don't need to memorise all of
        them — just the ones that show up in everyday ESS work.
      </Lede>
      <CardGrid>
        {principles.map(([num, title]) => (
          <PillarCard kicker={num} title={title} key={num} />
        ))}
      </CardGrid>
      <p>
        The OAIC's May 2026 guidance on APP 3 emphasises a data minimisation approach — collecting
        personal information only where it's reasonably necessary for the organisation's functions
        or activities. That principle runs through everything in this training.
      </p>
    </>
  );
}
