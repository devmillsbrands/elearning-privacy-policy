import { Eyebrow, Lede, Callout } from "../ui";

export default function Quality() {
  return (
    <>
      <Eyebrow>Module 9 of 14</Eyebrow>
      <h2>Data quality &amp; customer requests</h2>
      <Lede>
        Privacy isn't only about keeping information secret — APP 10 is about keeping it right.
      </Lede>
      <Callout label="APP 10 — QUALITY">
        <p>
          Information used or disclosed should be accurate, up to date, complete and relevant for
          its purpose. If a customer gives you a new shipping address and your process requires
          updating it, don't knowingly keep using the old one.
        </p>
      </Callout>
      <h3>When customers ask about their own information</h3>
      <p>
        Customers may ask to access their information (APP 12), have it corrected (APP 13), or ask
        how it's being handled. Don't ignore or casually reject these requests — follow the
        established process and escalate where required.
      </p>
    </>
  );
}
