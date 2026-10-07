import { Eyebrow, Lede, InfoTable } from "../ui";

const rows = [
  ["Customer name", "yes", "Yes"],
  ["Email address", "yes", "Yes"],
  ["Phone number", "yes", "Yes"],
  ["Shipping address", "yes", "Yes"],
  ["Billing address", "yes", "Yes"],
  ["Order history linked to a customer", "yes", "Yes"],
  ["Customer account", "yes", "Yes"],
  ["Customer enquiry", "yes", "Yes"],
  ["Product SKU by itself", "no", "Usually not"],
  ["Internal system ID linked to a customer", "maybe", "Potentially"],
  ["Anonymous sales statistics", "no", "Generally not"],
];

export default function Pii() {
  return (
    <>
      <Eyebrow>Module 2 of 14</Eyebrow>
      <h2>What is personal information?</h2>
      <Lede>
        Personal information is information or an opinion about an identified individual, or an
        individual who can reasonably be identified. It doesn't need to be a name on its own to
        create a privacy issue — anything that can identify or be linked to someone can be
        relevant.
      </Lede>
      <InfoTable rows={rows} />
    </>
  );
}
