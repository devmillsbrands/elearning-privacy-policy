import { Eyebrow, Lede, Flow, FlowStep, FlowArrow, Callout } from "../ui";

export default function Incidents() {
  return (
    <>
      <Eyebrow>Module 8 of 14</Eyebrow>
      <h2>Recognising &amp; responding to incidents</h2>
      <Lede>
        A privacy incident does not have to involve a hacker. Human error creates most of them.
      </Lede>
      <h3>What counts as a privacy incident</h3>
      <ul className="list-disc pl-[22px] text-ink-soft space-y-1.5">
        <li>Information sent to the wrong person</li>
        <li>Unauthorised access</li>
        <li>A lost device containing personal information</li>
        <li>Incorrect system permissions</li>
        <li>Customer data accidentally published or shared</li>
        <li>Unauthorised disclosure</li>
        <li>Credentials compromised</li>
        <li>Incorrect customer information exposed</li>
      </ul>
      <h3>What to do</h3>
      <Flow>
        <FlowStep num="1" title="Stop">
          Stop the exposure if you can safely do so.
        </FlowStep>
        <FlowArrow />
        <FlowStep num="2" title="Report">
          Notify the appropriate internal contact immediately.
        </FlowStep>
        <FlowArrow />
        <FlowStep num="3" title="Preserve">
          Don't delete evidence or try to hide what happened.
        </FlowStep>
        <FlowArrow />
        <FlowStep num="4" title="Escalate">
          Let the appropriate team assess it.
        </FlowStep>
      </Flow>
      <p className="text-[13.5px] text-ink-faint">
        The OAIC's data-breach response framework mirrors this at an organisational level:
        contain, assess, notify, review. You're never expected to make the legal call yourself.
      </p>
      <Callout variant="danger" label="WHAT NOT TO DO">
        <p>
          Don't hide it. Don't delete evidence. Don't blame someone else. Don't assume "it's
          probably fine." Don't promise the customer there's no issue. Don't run your own
          unauthorised investigation.
        </p>
      </Callout>
      <p>
        Under the Notifiable Data Breaches scheme, some eligible breaches must be notified once a
        legal threshold is met — but that determination sits with the organisation's process, not
        with the person who found the issue. Your responsibility is simple:{" "}
        <strong>recognise, report, assist.</strong>
      </p>
    </>
  );
}
