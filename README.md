# AI Prompt Builder

> A React web app that guides users through building structured LLM prompts from
> templates, with per-section validation and configurable output settings.

## Overview

Writing a good prompt is mostly a matter of covering the right sections. This app
walks the user through them: pick a template for the kind of task at hand, fill in
each required section, tune the output configuration, and copy out an assembled
prompt ready to paste into an LLM.

The app itself makes no AI calls — it is a prompt composition tool, and the
finished prompt is the output.

## Features

- **Task templates.** Each template (Conversational Assistant, Code Generator, and
  others) declares its own required and optional sections and which output
  configurations it supports, all defined in `src/data/templates.json`.
- **Guided section-by-section builder** covering Role, Context, Instructions,
  Output Format, and optional Constraints and Examples.
- **Live word-count validation.** Each field tracks its word count and the
  "continue" step stays disabled until every required field falls within the
  expected range, so under- and over-specified prompts are caught before assembly.
- **Output configuration** for tone, verbosity, output format, references, and
  citation style.
- **Assembled final output** with copy-to-clipboard, plus a reset that clears all
  state and returns to the template picker.

## Tech stack

React 19 · Vite · Tailwind CSS · `react-copy-to-clipboard` · ESLint.

## Getting started

```sh
npm install
npm run dev
```

## Project structure

```
src/
  App.jsx                 view routing and all builder state
  components/
    Home.jsx              template picker
    PromptBuilder.jsx     section-by-section input with word-count validation
    ConfigValidation.jsx  tone, verbosity, format, reference settings
    FinalOutput.jsx       assembled prompt and copy-to-clipboard
    Section.jsx           reusable labelled input section
    TemplateCard.jsx      template card
    Layout.jsx            page shell
  data/templates.json     template definitions
```

## Scripts

| command | what it does |
|---|---|
| `npm run dev` | start the dev server |
| `npm run build` | production build |
| `npm run preview` | serve the production build |
| `npm run lint` | ESLint |

## Limitations

The app formats prompts only; no model is called and no API key is needed.
Builder state is held in memory and is not persisted between sessions.

## Credits

Built by Noah Erickson and Klara Seipold.

## License

Released under the [MIT License](LICENSE).
