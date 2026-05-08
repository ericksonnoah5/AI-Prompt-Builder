export default function TemplateCard({
  template,
  setCurrentView,
  setSelectedTemplate,
}) {
  return (
    <button
      onClick={() => {
        setSelectedTemplate(template);
        setCurrentView("builder");
      }}
      className="rounded-2xl border border-slate-700 bg-slate-900 p-5 text-left transition hover:border-blue-400"
    >
      <h3 className="text-xl font-bold mb-2">{template.id}</h3>
      <p className="text-sm text-slate-400 mb-4">{template.description}</p>

      <div className="mb-3">
        <p className="text-sm font-semibold text-slate-300 mb-2">
          Required Sections
        </p>
        <ul className="text-sm text-slate-400 space-y-1">
          {template.requiredSections.map((section) => (
            <li key={section.name}>• {section.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-300 mb-2">
          Optional Sections
        </p>
        <ul className="text-sm text-slate-400 space-y-1">
          {template.optionalSections.map((section) => (
            <li key={section.name}>• {section.name}</li>
          ))}
        </ul>
      </div>
    </button>
  );
}
