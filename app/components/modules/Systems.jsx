import { Eyebrow, Lede, CardGrid, PillarCard, Callout } from "../ui";

const systems = [
  ["Shopify", "Customer accounts, orders, addresses, contact information"],
  ["Magento / M2", "Customer records, orders, addresses, account information"],
  ["Freshdesk", "Enquiries, email addresses, contact info, conversation history"],
  ["Exports", "CSV files, Excel files, reports, data extracts"],
];

export default function Systems() {
  return (
    <>
      <Eyebrow>Module 5 of 14</Eyebrow>
      <h2>Where you'll encounter it</h2>
      <Lede>
        The system doesn't change our privacy responsibility — the same rules apply everywhere
        personal information lives.
      </Lede>
      <CardGrid>
        {systems.map(([name, desc]) => (
          <PillarCard title={name} key={name}>
            <p className="m-0 text-[13.5px]">{desc}</p>
          </PillarCard>
        ))}
      </CardGrid>
      <h3>Screenshots &amp; spreadsheets</h3>
      <p>
        A common misconception: "it's only a screenshot." A screenshot can contain personal
        information just as easily as a database record — and the same goes for Excel files, CSV
        exports, screen recordings, reports, copied emails, logs and support tickets.
      </p>
      <Callout label="BEFORE SHARING A SCREENSHOT, ASK">
        <p>
          Does it contain customer information? Is all of it necessary? Can unnecessary
          information be removed? Who will receive it? Is the channel appropriate?
        </p>
      </Callout>
    </>
  );
}
