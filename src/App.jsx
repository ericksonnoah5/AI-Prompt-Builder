import { useState } from "react";

import Home from "./components/Home";
import PromptBuilder from "./components/PromptBuilder";
import ConfigValidation from "./components/ConfigValidation";
import FinalOutput from "./components/FinalOutput";
import templates from "./data/templates.json";

export default function App() {
  const [currentView, setCurrentView] = useState("home");

  const [tone, setTone] = useState(0);
  const [verbosity, setVerbosity] = useState(0);
  const [format, setFormat] = useState(0);
  const [references, setReferences] = useState(0);
  const [citation, setCitation] = useState(0);

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [inRole, setInRole] = useState("");
  const [inRole2, setInRole2] = useState("");
  const [inContext, setInContext] = useState("");
  const [inContext2, setInContext2] = useState("");
  const [inInstructions, setInInstructions] = useState("");
  const [inInstructions2, setInInstructions2] = useState("");
  const [inOutput, setInOutput] = useState("");
  const [inOutput2, setInOutput2] = useState("");
  const [inConstraints, setInConstraints] = useState("");
  const [inConstraints2, setInConstraints2] = useState("");
  const [inExamples, setInExamples] = useState("");
  const [inExamples2, setInExamples2] = useState("");

  function reset() {
    setTone(0);
    setVerbosity(0);
    setFormat(0);
    setReferences(0);
    setCitation(0);

    setSelectedTemplate(null);

    setInRole("");
    setInRole2("");
    setInContext("");
    setInContext2("");
    setInInstructions("");
    setInInstructions2("");
    setInOutput("");
    setInOutput2("");
    setInConstraints("");
    setInConstraints2("");
    setInExamples("");
    setInExamples2("");

    setCurrentView("home");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {currentView === "home" && (
        <Home
          templates={templates}
          setCurrentView={setCurrentView}
          setSelectedTemplate={setSelectedTemplate}
        />
      )}

      {currentView === "builder" && (
        <PromptBuilder
          selectedTemplate={selectedTemplate}
          setCurrentView={setCurrentView}
          inRole={inRole}
          setInRole={setInRole}
          inRole2={inRole2}
          setInRole2={setInRole2}
          inContext={inContext}
          setInContext={setInContext}
          inContext2={inContext2}
          setInContext2={setInContext2}
          inInstructions={inInstructions}
          setInInstructions={setInInstructions}
          inInstructions2={inInstructions2}
          setInInstructions2={setInInstructions2}
          inOutput={inOutput}
          setInOutput={setInOutput}
          inOutput2={inOutput2}
          setInOutput2={setInOutput2}
          inConstraints={inConstraints}
          setInConstraints={setInConstraints}
          inConstraints2={inConstraints2}
          setInConstraints2={setInConstraints2}
          inExamples={inExamples}
          setInExamples={setInExamples}
          inExamples2={inExamples2}
          setInExamples2={setInExamples2}
        />
      )}

      {currentView === "config" && (
        <ConfigValidation
          setCurrentView={setCurrentView}
          setTone={setTone}
          setVerbosity={setVerbosity}
          setFormat={setFormat}
          setReferences={setReferences}
          setCitation={setCitation}
          tone={tone}
          verbosity={verbosity}
          references={references}
          citation={citation}
          format={format}
          inRole={inRole}
          inRole2={inRole2}
          inContext={inContext}
          inContext2={inContext2}
          inInstructions={inInstructions}
          inInstructions2={inInstructions2}
          inOutput={inOutput}
          inOutput2={inOutput2}
          inConstraints={inConstraints}
          inConstraints2={inConstraints2}
          inExamples={inExamples}
          inExamples2={inExamples2}
        />
      )}

      {currentView === "final" && (
        <FinalOutput
          setCurrentView={setCurrentView}
          tone={tone}
          verbosity={verbosity}
          citation={citation}
          format={format}
          inRole={inRole}
          inRole2={inRole2}
          inContext={inContext}
          inContext2={inContext2}
          inInstructions={inInstructions}
          inInstructions2={inInstructions2}
          selectedTemplate={selectedTemplate}
          inOutput={inOutput}
          inOutput2={inOutput2}
          inConstraints={inConstraints}
          inConstraints2={inConstraints2}
          inExamples={inExamples}
          inExamples2={inExamples2}
          reset={reset}
        />
      )}
    </div>
  );
}
