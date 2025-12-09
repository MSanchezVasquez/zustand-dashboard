import { WhiteCard } from "../../components";
import { usePersonStore } from "../../stores";

export const PersonPage = () => {
  const firstName = usePersonStore((state) => state.firstName);
  const lastName = usePersonStore((state) => state.lastName);
  const setFirstName = usePersonStore((state) => state.setFirstName);
  const setLastName = usePersonStore((state) => state.setLastName);

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Perfil de Persona</h1>
        <p className="text-slate-500 mt-2 font-medium">
          Sincronización de estado con Session Storage y Firebase.
        </p>
      </div>
      <hr className="mb-8 border-slate-200" />

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- Formulario --- */}
        <WhiteCard className=" flex flex-col justify-center">
          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Información General
          </h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Primer Nombre
              </label>
              <input
                type="text"
                placeholder="Ej. Edward"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Apellido
              </label>
              <input
                type="text"
                placeholder="Ej. Tompson"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </form>
        </WhiteCard>

        {/* --- Visualizador de Estado (Estilo Terminal) --- */}
        <WhiteCard className="flex flex-col !bg-slate-900 !border-slate-800 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-bold text-lg">Estado (Debug)</h2>
            {/* Puntos de colores estilo ventana */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-6 font-mono border border-slate-800 relative flex-1">
            <div className="absolute top-3 right-4 text-xs text-slate-500 font-bold opacity-50">
              store.person
            </div>
            <pre className="text-emerald-400 text-sm leading-relaxed overflow-x-auto">
              {JSON.stringify(
                {
                  firstName,
                  lastName,
                },
                null,
                2
              )}
            </pre>
          </div>
        </WhiteCard>
      </div>
    </>
  );
};
