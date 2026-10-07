import { Eyebrow, Lede } from "../ui";

function TreeNode({ children, final }) {
  return (
    <div
      className={`rounded-[10px] px-5 py-3 text-center text-sm font-semibold max-w-[380px] border ${
        final ? "bg-accent border-accent text-white" : "bg-surface border-border text-ink"
      }`}
    >
      {children}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center gap-0.5 my-1">
      <div className="w-[1.5px] h-4 bg-border" />
      <div className="font-mono text-[11px] text-accent-dark bg-accent-soft px-2 py-0.5 rounded-full">
        yes
      </div>
      <div className="w-[1.5px] h-4 bg-border" />
    </div>
  );
}

export default function DecisionTree() {
  return (
    <>
      <Eyebrow>Module 11 of 14</Eyebrow>
      <h2>The ESS privacy decision tree</h2>
      <Lede>
        One simple check, repeated at every step: if the answer isn't a clear yes, stop and ask.
      </Lede>
      <div className="flex flex-col items-center my-[22px] mb-[30px]">
        <TreeNode>Do I need this information?</TreeNode>
        <Connector />
        <TreeNode>Am I authorised to access or use it?</TreeNode>
        <Connector />
        <TreeNode>Is this use or disclosure appropriate?</TreeNode>
        <Connector />
        <TreeNode>Am I sending or storing it securely?</TreeNode>
        <Connector />
        <TreeNode final>Proceed</TreeNode>
      </div>
      <p className="bg-danger-soft border border-danger text-danger text-[13px] mt-3.5 px-[18px] py-2.5 rounded-[10px] text-center">
        If the answer to any step is no, or you're not sure — stop and ask.
      </p>
    </>
  );
}
