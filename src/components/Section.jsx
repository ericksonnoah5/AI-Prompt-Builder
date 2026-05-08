export default function Section({
  title,
  field1,
  field2,
  value1,
  setValue1,
  value2,
  setValue2,
}) {
  const wordCount = (str) =>
    str.trim() === ""
      ? 0
      : str
          .trim()
          .split(" ")
          .filter((s) => s.length > 0).length;

  return (
    <div className="text-left p-6 rounded-xl border bg-slate-900 border-slate-700">
      <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>

      <label className="block text-sm text-slate-200 mb-2">{field1}</label>
      <input
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        placeholder={`Enter ${field1}`}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 mb-2 text-white"
      />
      <p className="block text-sm text-slate-400 mb-4">
        Text needs to be 20-30 words, Current: {wordCount(value1)}
      </p>

      <label className="block text-sm text-slate-200 mb-2">{field2}</label>
      <input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        placeholder={`Enter ${field2}`}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 mb-2 text-white"
      />
      <p className="block text-sm text-slate-400">
        Text needs to be 20-30 words, Current: {wordCount(value2)}
      </p>
    </div>
  );
}
