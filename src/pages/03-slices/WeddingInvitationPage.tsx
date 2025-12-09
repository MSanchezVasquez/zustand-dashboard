import { FormEvent } from "react";
import { WhiteCard } from "../../components";
import { useWeddingStore } from "../../stores";

export const WeddingInvitationPage = () => {
  // Slice: Person
  const firstName = useWeddingStore((state) => state.firstName);
  const lastName = useWeddingStore((state) => state.lastName);
  const setFirstName = useWeddingStore((state) => state.setFirstName);
  const setLastName = useWeddingStore((state) => state.setLastName);

  // Slice: Guest
  const guestCount = useWeddingStore((state) => state.guestCount);
  const setGuestCount = useWeddingStore((state) => state.setGuestCount);

  // Slice: Date
  const eventDate = useWeddingStore((state) => state.eventDate);
  const eventTime = useWeddingStore((state) => state.eventTime);
  const setEventDate = useWeddingStore((state) => state.setEventDate);
  const setEventTime = useWeddingStore((state) => state.setEventTime);

  // Slice: Confirmation
  const isComing = useWeddingStore((state) => state.isComing);
  const setIsComing = useWeddingStore((state) => state.setIsComing);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      guestCount,
      eventDate,
      eventTime,
      isComing,
    });
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Invitación de Boda
        </h1>
        <p className="text-slate-500 mt-2 font-medium">
          Zustand segmentado en slices (Person, Guest, Date).
        </p>
      </div>
      <hr className="mb-8 border-slate-200" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* --- Lado Izquierdo: Formulario --- */}
        <WhiteCard className="flex flex-col">
          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Confirmación de Asistencia
          </h2>

          <form onSubmit={onSubmit} className="space-y-5">
            {/* Nombres */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Tu apellido"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Invitados */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                ¿Cuántos invitados traerá?
              </label>
              <input
                type="number"
                placeholder="0"
                min="0"
                value={guestCount}
                onChange={(e) => setGuestCount(+e.target.value)}
              />
            </div>

            {/* Fecha y Hora */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Fecha
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Hora
                </label>
                <input
                  type="time"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                />
              </div>
            </div>

            {/* Radio Buttons (Asistencia) */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">
                ¿Asistirás?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors w-full">
                  <input
                    type="radio"
                    name="isComing"
                    className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                    checked={isComing}
                    onChange={() => setIsComing(true)}
                  />
                  <span className="font-medium text-slate-700">Sí, iré</span>
                </label>

                <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors w-full">
                  <input
                    type="radio"
                    name="isComing"
                    className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                    checked={!isComing}
                    onChange={() => setIsComing(false)}
                  />
                  <span className="font-medium text-slate-700">No puedo</span>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]">
                Enviar Confirmación
              </button>
            </div>
          </form>
        </WhiteCard>

        {/* --- Lado Derecho: Terminal (Debug) --- */}
        <div className="flex flex-col gap-6">
          <WhiteCard className="flex flex-col !bg-slate-900 !border-slate-800 shadow-xl overflow-hidden h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-bold text-lg">
                Estado Combinado (Debug)
              </h2>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="bg-slate-950/50 rounded-xl p-6 font-mono border border-slate-800 relative flex-1">
              <div className="absolute top-3 right-4 text-xs text-slate-500 font-bold opacity-50">
                useWeddingStore
              </div>
              <pre className="text-emerald-400 text-sm leading-relaxed overflow-x-auto">
                {JSON.stringify(
                  {
                    person: { firstName, lastName },
                    guest: { guestCount, isComing },
                    date: { eventDate, eventTime },
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          </WhiteCard>
        </div>
      </div>
    </>
  );
};
