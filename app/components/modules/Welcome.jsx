import { Eyebrow, Lede, Callout, Badge } from "../ui";

export default function Welcome() {
  return (
    <>
      <Eyebrow>Module 1 of 14</Eyebrow>
      <h2>Why we're doing this</h2>
      <Lede>
        Privacy isn't just an IT issue. Every day at ESS, we work with names, addresses, orders,
        enquiries and exports that belong to real people — and how we handle that information
        matters.
      </Lede>
      <Callout label="KEY MESSAGE">
        <p>
          Customer information should only be accessed, used, shared and stored when there is a
          legitimate business reason to do so.
        </p>
      </Callout>
      <h3>What this training covers</h3>
      <ul className="list-disc pl-[22px] text-ink-soft space-y-1.5">
        <li>What counts as personal information, and where you'll run into it day to day</li>
        <li>The Australian Privacy Principles that actually affect our work</li>
        <li>Five rules for collecting, accessing, using, sharing and protecting information</li>
        <li>How to recognise a privacy incident, and what to do about it</li>
        <li>Practice scenarios, a final assessment, and a one-page cheat sheet to keep</li>
      </ul>
      <div className="flex gap-2 flex-wrap my-[14px] mb-[22px]">
        <Badge>~60 minutes</Badge>
        <Badge>Annual refresher required</Badge>
        <Badge>ESS &amp; operational teams</Badge>
      </div>
    </>
  );
}
