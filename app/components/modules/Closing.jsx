import { Eyebrow, Lede, Callout } from "../ui";

export default function Closing() {
  return (
    <>
      <Eyebrow>Module 14 of 14</Eyebrow>
      <h2>Regulatory update &amp; closing message</h2>
      <Callout variant="warn" label="2026 REGULATORY UPDATE">
        <p>
          Additional APP 1 privacy-policy obligations relating to certain automated
          decision-making using personal information commence 10 December 2026, where specified
          conditions are met — including decisions that could reasonably be expected to
          significantly affect someone's rights or interests. Privacy obligations can change:
          always follow the current company Privacy Policy and approved procedures rather than
          relying on an older training session.
        </p>
      </Callout>
      <h3>To close</h3>
      <Lede>
        Privacy isn't just about what systems we use. It's about how we treat people's
        information.
      </Lede>
      <ul className="list-disc pl-[22px] text-ink-soft space-y-1.5">
        <li>Collect only what is needed.</li>
        <li>Access only what you need.</li>
        <li>Use it appropriately.</li>
        <li>Share it carefully.</li>
        <li>Protect it.</li>
        <li>And if something goes wrong — report it.</li>
      </ul>
      <p className="font-semibold text-ink">When in doubt, stop and ask.</p>
    </>
  );
}
