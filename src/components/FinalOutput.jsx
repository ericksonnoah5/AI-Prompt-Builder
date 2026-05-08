export default function FinalOutput({ setCurrentView, tone, verbosity, format, citation, inRole,
  inRole2, inContext, inContext2, inInstructions, inInstructions2, selectedTemplate,
  inOutput, inOutput2, inConstraints, inConstraints2, inExamples, inExamples2,
  reset }) {

  const codeTemplate = selectedTemplate;

  function PromptText() {
    return (
      <>
        <p>### INSTRUCTIONS</p>
        {tone === 1 && <p> - Use a formal and businesslike tone.</p>}
        {tone === 2 && <p> - Use a friendly and casual tone.</p>}

        {verbosity === 1 && <p> - Provide a brief and concise overview.</p>}
        {verbosity === 2 && <p> - Provide a clear and comprehensible explanation.</p>}
        {verbosity === 3 && <p> - Provide a thorough and lengthy explanation.</p>}

        {format === 1 && <p> - Format the response into bullet points.</p>}
        {format === 2 && <p> - Format the response into paragraphs.</p>}

        {citation === 1 && <p> - Provide APA formatted citations for relevant sorces.</p>}
        {citation === 2 && <p> - Provide MLA formatted citations for relevant sorces.</p>}
        {citation === 3 && <p> - Provide Chicago formatted citations for relevant sorces.</p>}
        {citation === 4 && <p> - Provide links to relevant sorces.</p>}

        <br />

        <p>### PROMPT</p>
        <p>## {codeTemplate.requiredSections[0].name}</p>
        <p>{codeTemplate.requiredSections[0].fields[0]}: {inRole} </p>
        <p>{codeTemplate.requiredSections[0].fields[1]}: {inRole2} </p>

        <br />

        <p>## {codeTemplate.requiredSections[1].name}</p>
        <p>{codeTemplate.requiredSections[1].fields[0]}: {inContext} </p>
        <p>{codeTemplate.requiredSections[1].fields[1]}: {inContext2} </p>

        <br />

        <p>## {codeTemplate.requiredSections[2].name}</p>
        <p>{codeTemplate.requiredSections[2].fields[0]}: {inInstructions} </p>
        <p>{codeTemplate.requiredSections[2].fields[1]}: {inInstructions2} </p>

        <br />

        <p>## {codeTemplate.requiredSections[3].name}</p>
        <p>{codeTemplate.requiredSections[3].fields[0]}: {inOutput} </p>
        <p>{codeTemplate.requiredSections[3].fields[1]}: {inOutput2} </p>

        {(inConstraints != "" || inConstraints2 != "") && <><br /> <p>## {codeTemplate.optionalSections[0].name}</p></>}
        {inConstraints != "" && <p>{codeTemplate.optionalSections[0].fields[0]}: {inConstraints} </p>}
        {inConstraints2 != "" && <p>{codeTemplate.optionalSections[0].fields[1]}: {inConstraints2} </p>}

        {(inExamples != "" || inExamples2 != "") && <><br /> <p>## {codeTemplate.optionalSections[1].name}</p></>}
        {inExamples != "" && <p>{codeTemplate.optionalSections[1].fields[0]}: {inExamples} </p>}
        {inExamples2 != "" && <p>{codeTemplate.optionalSections[1].fields[1]}: {inExamples2} </p>}

      </>)
  }

  return (
    <>
      <div className="text-left p-5 rounded-xl border bg-slate-900 border-slate-700 text-white font-mono">
        <PromptText />
      </div>

      <br/>

      <div className="flex gap-4">
        <button
          className="text-left p-5 rounded-xl border bg-slate-900 border-slate-700 text-white"
          onClick={() => reset()}
        >Reset</button>

        <button
          className="text-left p-5 rounded-xl border bg-slate-900 border-slate-700 text-white"
          onClick={() => setCurrentView("config")}
        >Back</button>
      </div>
    </>
  )
}
