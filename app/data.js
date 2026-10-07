export const scenarios = [
  {
    id: "s1",
    situation:
      "You are responding to Customer A. You accidentally send Customer A's invoice to Customer B.",
    question: "What do you do?",
    options: [
      { id: "a", text: "Delete the sent email and move on." },
      { id: "b", text: "Wait and see if Customer B responds." },
      {
        id: "c",
        text: "Immediately report the incident through the company's privacy/data-breach process.",
      },
      { id: "d", text: "Send another email and hope the issue is resolved." },
    ],
    correct: "c",
    explanation:
      "Report it immediately. You shouldn't try to independently decide whether an incident meets the legal threshold for notification — your job is to identify and escalate, not to judge or hide it.",
  },
  {
    id: "s2",
    situation:
      "You have access to a customer database. A colleague asks: \"Can you look up my friend's order? I just want to know what they bought.\"",
    question: "What do you do?",
    options: [
      { id: "a", text: "Look it up because you have access." },
      { id: "b", text: "Look it up but don't tell anyone." },
      { id: "c", text: "Take a screenshot and send it privately." },
      { id: "d", text: "Don't access the information — there is no legitimate business reason." },
    ],
    correct: "d",
    explanation:
      "Having access to a system doesn't mean you should use it for anything. Access should always be tied to a genuine work requirement — curiosity, even a colleague's, isn't one.",
  },
  {
    id: "s3",
    situation:
      'Someone contacts the team and asks: "Can you give me the shipping address associated with this order?"',
    question: "What's the right first move?",
    options: [
      { id: "a", text: "Provide the address straight away — they gave the order number." },
      {
        id: "b",
        text: "Verify who they are and whether they are authorised before disclosing anything.",
      },
      { id: "c", text: "Ask a colleague to send it instead." },
      { id: "d", text: "Send it, then ask questions if something feels off later." },
    ],
    correct: "b",
    explanation:
      "Don't disclose first and verify later. Check who the person is, whether they're authorised, and whether the request has been properly verified — escalate if you're not sure.",
  },
  {
    id: "s4",
    situation:
      "You need customer information for a report and export a large customer CSV file, but you only need 50 of the records in it.",
    question:
      'Should you keep the full export "just in case you need the other records later"?',
    options: [
      { id: "a", text: "Yes — it's already exported, so there's no extra risk in keeping it." },
      {
        id: "b",
        text: "No — keep only what's actually needed; the rest increases exposure if something goes wrong.",
      },
      { id: "c", text: "Only keep it if you password-protect the file." },
      { id: "d", text: "It doesn't matter as long as it stays on your own computer." },
    ],
    correct: "b",
    explanation:
      "This is data minimisation in practice: keeping more personal information than the task requires increases what could be exposed if something goes wrong, with no real business benefit.",
  },
];

export const assessment = [
  {
    id: "q1",
    prompt: "Which of the following could be personal information?",
    options: [
      { id: "a", text: "Customer name" },
      { id: "b", text: "Customer email" },
      { id: "c", text: "Shipping address" },
      { id: "d", text: "All of the above" },
    ],
    correct: "d",
    explanation:
      "All three can identify or be linked to an individual, which is what makes information 'personal information.'",
  },
  {
    id: "q2",
    prompt:
      "You have access to a customer database. Can you look up a customer because you're curious about their order?",
    options: [
      { id: "a", text: "Yes, access is access." },
      { id: "b", text: "No — there needs to be a legitimate business reason." },
    ],
    correct: "b",
    explanation: "Access should always be connected to a genuine work requirement, not curiosity.",
  },
  {
    id: "q3",
    prompt: "You accidentally send customer information to the wrong person. What should you do?",
    options: [
      { id: "a", text: "Ignore it" },
      { id: "b", text: "Delete your sent email" },
      { id: "c", text: "Report it immediately" },
      { id: "d", text: "Wait for the customer to complain" },
    ],
    correct: "c",
    explanation:
      "Report it immediately through the internal privacy/data-breach process, and let the responsible team assess and manage it.",
  },
  {
    id: "q4",
    prompt: "Should you share your password with a colleague?",
    options: [
      { id: "a", text: "Yes, if you trust them" },
      { id: "b", text: "No" },
    ],
    correct: "b",
    explanation:
      "Sharing credentials breaks the link between a person and the actions taken under their account, and is one of the 'never' items.",
  },
  {
    id: "q5",
    prompt: "Can a screenshot contain personal information?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No, it's just an image" },
    ],
    correct: "a",
    explanation:
      "A screenshot, spreadsheet, export, or recording can all carry personal information — the format doesn't change the responsibility.",
  },
  {
    id: "q6",
    prompt: "Before sending customer information, what should you verify?",
    options: [
      { id: "a", text: "Only that the file opens correctly" },
      {
        id: "b",
        text: "The recipient, the purpose, the information included, and the communication method",
      },
      { id: "c", text: "Nothing — sending is routine" },
      { id: "d", text: "Only the file size" },
    ],
    correct: "b",
    explanation: "Who, why, what and how — check all four before you click send.",
  },
  {
    id: "q7",
    prompt: "Does a privacy incident always involve hacking?",
    options: [
      { id: "a", text: "Yes, only external attacks count" },
      { id: "b", text: "No — human error can also create a privacy incident" },
    ],
    correct: "b",
    explanation:
      "Sending information to the wrong person, incorrect permissions, or a lost device are privacy incidents too, with no hacker involved.",
  },
  {
    id: "q8",
    prompt:
      "Who should determine whether an incident meets the legal requirements for notification?",
    options: [
      { id: "a", text: "The employee who discovered it, using their best judgement" },
      {
        id: "b",
        text: "The organisation's designated privacy/data-breach process and responsible personnel",
      },
      { id: "c", text: "Whoever is available at the time" },
      { id: "d", text: "The customer involved" },
    ],
    correct: "b",
    explanation:
      "Employees identify and escalate; the formal legal determination is made through the organisation's breach-response process, not informally.",
  },
  {
    id: "q9",
    prompt: "What should you do if you're unsure whether you can access or share information?",
    options: [
      { id: "a", text: "Proceed — you can always undo it later" },
      { id: "b", text: "Stop and ask, or escalate" },
      { id: "c", text: "Ask the customer directly" },
      { id: "d", text: "Assume it's fine if no one objects" },
    ],
    correct: "b",
    explanation:
      "When any step in the decision tree is a 'no' or 'not sure,' the answer is to stop and ask — not to guess.",
  },
  {
    id: "q10",
    prompt: "Why is data minimisation important?",
    options: [
      { id: "a", text: "It makes exports load faster" },
      {
        id: "b",
        text: "It limits unnecessary collection and use of personal information, reducing what could be exposed if something goes wrong",
      },
      { id: "c", text: "It's only a formality with no real effect" },
      { id: "d", text: "It reduces the need for encryption" },
    ],
    correct: "b",
    explanation: "Less unnecessary personal information held means less that can be exposed, misused, or mishandled.",
  },
];
