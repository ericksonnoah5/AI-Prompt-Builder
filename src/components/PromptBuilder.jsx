import { useState } from "react";
import Section from "./Section";

export default function PromptBuilder({
  setCurrentView,
  selectedTemplate,
  inRole,
  setInRole,
  inRole2,
  setInRole2,
  inContext,
  setInContext,
  inContext2,
  setInContext2,
  inInstructions,
  setInInstructions,
  inInstructions2,
  setInInstructions2,
  inOutput,
  setInOutput,
  inOutput2,
  setInOutput2,
  inConstraints,
  setInConstraints,
  inConstraints2,
  setInConstraints2,
  inExamples,
  setInExamples,
  inExamples2,
  setInExamples2,
}) {
  const wordCount = (str) =>
    str.trim() === ""
      ? 0
      : str
          .trim()
          .split(" ")
          .filter((s) => s.length > 0).length;

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);

  if (!selectedTemplate) {
    return (
      <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">No template selected</h1>
        <button
          onClick={() => setCurrentView("home")}
          className="text-left p-4 rounded-xl border bg-slate-900 border-slate-700 text-white"
        >
          Back Home
        </button>
      </div>
    );
  }

  const codeTemplate = selectedTemplate;

  const formIsValid =
    wordCount(inRole) >= 20 &&
    wordCount(inRole) <= 30 &&
    wordCount(inRole2) >= 20 &&
    wordCount(inRole2) <= 30 &&
    wordCount(inContext) >= 20 &&
    wordCount(inContext) <= 30 &&
    wordCount(inContext2) >= 20 &&
    wordCount(inContext2) <= 30 &&
    wordCount(inInstructions) >= 20 &&
    wordCount(inInstructions) <= 30 &&
    wordCount(inInstructions2) >= 20 &&
    wordCount(inInstructions2) <= 30 &&
    wordCount(inOutput) >= 20 &&
    wordCount(inOutput) <= 30 &&
    wordCount(inOutput2) >= 20 &&
    wordCount(inOutput2) <= 30;

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Build Your Prompt</h1>
        <p className="text-slate-400">{codeTemplate.id}</p>
      </div>

      <div className="space-y-6 mb-10">
        <Section
          title={codeTemplate.requiredSections[0].name}
          field1={codeTemplate.requiredSections[0].fields[0]}
          field2={codeTemplate.requiredSections[0].fields[1]}
          value1={inRole}
          setValue1={setInRole}
          value2={inRole2}
          setValue2={setInRole2}
        />

        <Section
          title={codeTemplate.requiredSections[1].name}
          field1={codeTemplate.requiredSections[1].fields[0]}
          field2={codeTemplate.requiredSections[1].fields[1]}
          value1={inContext}
          setValue1={setInContext}
          value2={inContext2}
          setValue2={setInContext2}
        />

        <Section
          title={codeTemplate.requiredSections[2].name}
          field1={codeTemplate.requiredSections[2].fields[0]}
          field2={codeTemplate.requiredSections[2].fields[1]}
          value1={inInstructions}
          setValue1={setInInstructions}
          value2={inInstructions2}
          setValue2={setInInstructions2}
        />

        <Section
          title={codeTemplate.requiredSections[3].name}
          field1={codeTemplate.requiredSections[3].fields[0]}
          field2={codeTemplate.requiredSections[3].fields[1]}
          value1={inOutput}
          setValue1={setInOutput}
          value2={inOutput2}
          setValue2={setInOutput2}
        />

        {option1 && (
          <Section
            title={codeTemplate.optionalSections[0].name}
            field1={codeTemplate.optionalSections[0].fields[0]}
            field2={codeTemplate.optionalSections[0].fields[1]}
            value1={inConstraints}
            setValue1={setInConstraints}
            value2={inConstraints2}
            setValue2={setInConstraints2}
          />
        )}

        {option2 && (
          <Section
            title={codeTemplate.optionalSections[1].name}
            field1={codeTemplate.optionalSections[1].fields[0]}
            field2={codeTemplate.optionalSections[1].fields[1]}
            value1={inExamples}
            setValue1={setInExamples}
            value2={inExamples2}
            setValue2={setInExamples2}
          />
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setCurrentView("home")}
          className="text-left p-4 rounded-xl border bg-slate-900 border-slate-700 text-white"
        >
          Back
        </button>

        <button
          onClick={() => setOption1((prev) => !prev)}
          className="text-left p-4 rounded-xl border bg-slate-900 border-slate-700 text-white"
        >
          {option1 ? "Remove " : "Add "}
          {codeTemplate.optionalSections[0].name}
        </button>

        <button
          onClick={() => setOption2((prev) => !prev)}
          className="text-left p-4 rounded-xl border bg-slate-900 border-slate-700 text-white"
        >
          {option2 ? "Remove " : "Add "}
          {codeTemplate.optionalSections[1].name}
        </button>

        <button
          onClick={() => {
            if (formIsValid) {
              setCurrentView("config");
            }
          }}
          className="text-left p-4 rounded-xl border bg-slate-900 border-slate-700 text-white"
        >
          Configs
        </button>
      </div>
    </div>
  );
}
