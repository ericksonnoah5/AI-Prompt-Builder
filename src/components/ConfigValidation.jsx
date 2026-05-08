
function ConfigValidation({ 
    setCurrentView, setTone, setVerbosity, setFormat, setReferences, setCitation,
        tone, verbosity, format, references, citation }) {

    function generate() {
        if (tone != 0 && verbosity != 0 && format != 0 && references != 0) {
            if ((references == 1 && citation != 0) || references == 2) {
                setCurrentView("final");
            }
        }
    }

    function AddCitationDropdown() {
        if (references == 1) {
            return (
                <select className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 m-2 text-left transition hover:border-blue-400">
                    <option onClick={() => setCitation(0)} defaultValue>Set Citation Style</option>
                    <option onClick={() => setCitation(1)}> APA </option>
                    <option onClick={() => setCitation(2)}> MLA </option>
                    <option onClick={() => setCitation(3)}> Chicago </option>
                    <option onClick={() => setCitation(4)}> Plain Link </option>
                </select>
            )
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <button 
                className="text-left p-4 m-2 rounded-xl border bg-slate-900 border-slate-700 text-white"
                onClick={() => setCurrentView("builder")}>Back
            </button>

            <h1 className="text-3xl tracking-wide text-center"> Set Global Settings</h1>

            <br />

            <div className="grid grid-cols-4 gap-4 text-[#ffffff]">

                <div className="float-left">

                    <select className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 m-2 text-center transition hover:border-blue-400">
                        <option onClick={() => setTone(0)} defaultValue>Set Tone</option>
                        <option onClick={() => setTone(1)}> Formal </option>
                        <option onClick={() => setTone(2)}> Casual </option>
                    </select>

                    <br />

                    <select className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 m-2 text-center transition hover:border-blue-400">
                        <option onClick={() => setVerbosity(0)} defaultValue>Set Verbosity</option>
                        <option onClick={() => setVerbosity(1)}> Low </option>
                        <option onClick={() => setVerbosity(2)}> Medium </option>
                        <option onClick={() => setVerbosity(3)}> High </option>
                    </select>

                    <br />

                    <select className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 m-2 text-center transition hover:border-blue-400">
                        <option onClick={() => setFormat(0)} defaultValue>Set Format</option>
                        <option onClick={() => setFormat(1)}> Bullet </option>
                        <option onClick={() => setFormat(2)}> Text </option>
                    </select>

                    <br />

                    <select className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 m-2 text-center transition hover:border-blue-400">
                        <option onClick={() => setReferences(0)} defaultValue> Include References </option>
                        <option onClick={() => setReferences(1)}> Yes </option>
                        <option onClick={() => setReferences(2)}> No </option>
                    </select>

                    <br />

                    <AddCitationDropdown />

                </div>

                <div className="col-start-2 col-end-4 px-4 py-2 rounded-2xl border border-slate-700 bg-slate-900 p-4 m-2 text-left transition hover:border-blue-400">

                    {tone === 0 && <p className="text-[#ffaaaa]">Error! You must select a tone</p>}
                    {verbosity === 0 && <p className="text-[#ffaaaa]">Error! You must select a level of verbosity</p>}
                    {format === 0 && <p className="text-[#ffaaaa]">Error! You must select an output format</p>}
                    {references === 0 && <p className="text-[#ffaaaa]">Error! You must select whether to list references</p>}
                    {references === 1 && citation === 0 && <p className="text-[#ffaaaa]">Error! You must select a citation style</p>}

                    {verbosity === 1 && format === 2 && <p className="text-[#99ddff]">Suggestion: Consider selecting the bullet point format for better readability with the low verbosity</p>}
                    {tone === 1 && references === 2 && <p className="text-[#99ddff]">Suggestion: For formal uses, it may be smart to have some sources</p>}
                    {references != 0 && <p className="text-[#eeff99]">Warning: Make sure you select the right citation format for your uses</p>}

                </div>

                <button 
                    className="h-[25%] rounded-2xl border border-slate-700 bg-slate-900 p-4 m-2 text-center transition hover:border-blue-400" 
                    onClick={() => generate()}> Generate 
                </button>

            </div>

        </div>
    )

}

export default ConfigValidation
