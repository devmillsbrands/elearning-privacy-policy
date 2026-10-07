# ESS Privacy Awareness Training (Next.js + Tailwind CSS)

An interactive version of the Australian Privacy Awareness training pack, built with Next.js
(App Router) and styled with Tailwind CSS v4. Runs entirely locally — no data leaves your machine.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Updating the design

Tailwind is set up so most visual changes happen in one or two places instead of hunting through
every module:

- **Colors, fonts, and the mobile breakpoint** live in `app/globals.css` under the `@theme` block.
  Change `--color-accent`, for example, and every `bg-accent` / `text-accent` / `border-accent`
  utility across the app updates automatically. No `tailwind.config.js` is needed — Tailwind v4
  reads the theme straight from this CSS file.
- **Reusable pieces** (callouts, cards, the do/don't blocks, flow steps, quiz options, step
  buttons) live in `app/components/ui.jsx`. Editing a component there changes it everywhere it's
  used — e.g. tweak `Callout` once and every callout across all 14 modules follows.
- **Page content** for each of the 14 modules lives in `app/components/modules/`, written with
  Tailwind utility classes and the shared components from `ui.jsx`. These files are mostly just
  content — swap text, add a list item, or reorder sections without touching styling.

## Project structure

```
app/
  layout.js               Root layout, Google Fonts
  globals.css             Tailwind import + design tokens (@theme) + base typography
  page.js                 Renders the TrainingApp
  data.js                 Scenario & assessment question content
  components/
    ui.jsx                 Shared Tailwind building blocks (Callout, Flow, QuizCard, etc.)
    TrainingApp.jsx         Top-level state: current module, progress, mobile menu
    Sidebar.jsx             Left-hand module navigation (becomes a drawer below 900px)
    modules/
      Welcome.jsx
      Pii.jsx
      Apps.jsx
      Rules.jsx             Interactive accordion (5 golden rules)
      Systems.jsx
      Email.jsx             Interactive before-you-send checklist
      Scenarios.jsx         4 scenario questions with instant feedback
      Incidents.jsx
      Quality.jsx
      CrossBorder.jsx
      DecisionTree.jsx
      CheatSheet.jsx        Includes a print button
      Assessment.jsx        10-question scored assessment
      Closing.jsx
```

Each of the 14 modules is a separate component under `app/components/modules/`, so content can be
edited or reordered by changing the `modules` array in `app/components/TrainingApp.jsx`.
