export default function Home({
  templates,
  setCurrentView,
  setSelectedTemplate,
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">AI Software Prompt Builder</h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-6">
          Most AI prompts fail because they are unstructured. This will guides
          you through building prompts that are clear, consistent, and
          logically.
        </p>
      </div>

      <h2 className="text-xl font-semibold mb-6 text-slate-300">
        Choose a template to get started
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => {
              setSelectedTemplate(template);
              setCurrentView("builder");
            }}
            className="text-left p-6 rounded-xl border bg-slate-900 border-slate-700"
          >
            <div className="text-lg font-semibold text-white mb-1">
              {template.id}
            </div>

            <div className="text-sm text-slate-400 mb-4">
              {template.description}
            </div>

            <div className="text-xs text-slate-500">
              Required: {template.requiredSections.length}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
