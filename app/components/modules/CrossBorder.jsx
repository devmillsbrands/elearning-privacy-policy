import { Eyebrow, Lede, Callout } from "../ui";

export default function CrossBorder() {
  return (
    <>
      <Eyebrow>Module 10 of 14</Eyebrow>
      <h2>Cross-border information</h2>
      <Lede>
        Especially relevant for teams working across countries. Information may move between
        Australia, the Philippines, other countries, cloud platforms and third-party providers.
      </Lede>
      <Callout variant="warn" label="APP 8 — CROSS-BORDER DISCLOSURE">
        <p>
          Requirements can apply whenever personal information is disclosed overseas — including
          to an internal team in another country.
        </p>
      </Callout>
      <p>
        <strong>Don't assume</strong> "it's an internal team, so it's automatically okay."
        Cross-border handling should always follow the company's approved processes.
      </p>
    </>
  );
}
