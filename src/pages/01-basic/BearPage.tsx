import { useShallow } from "zustand/shallow";
import { WhiteCard } from "../../components";
import { useBearStore } from "../../stores";
import {
  IoAddOutline,
  IoRemoveOutline,
  IoTrashOutline,
  IoPawOutline,
} from "react-icons/io5";
import classNames from "classnames";

export const BearPage = () => {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Contador de Osos</h1>
        <p className="text-slate-500 mt-2 font-medium">
          Manejo de estado simple con Zustand.
        </p>
      </div>
      <hr className="mb-8 border-slate-200" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <BlackBears />
        <PolarBears />
        <PandaBears />
      </div>

      <BearDisplay />
    </>
  );
};

// --- Componentes Internos --- //

const BearCounterCard = ({
  label,
  count,
  onIncrease,
  onDecrease,
  color = "indigo",
}: {
  label: string;
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  color?: "indigo" | "cyan" | "emerald";
}) => {
  return (
    <WhiteCard centered className="hover:shadow-lg transition-shadow">
      <div
        className={classNames("p-3 rounded-2xl mb-4", {
          "bg-indigo-50 text-indigo-600": color === "indigo",
          "bg-cyan-50 text-cyan-600": color === "cyan",
          "bg-emerald-50 text-emerald-600": color === "emerald",
        })}
      >
        <IoPawOutline size={40} />
      </div>

      <h2 className="text-lg font-bold text-slate-700 mb-4">{label}</h2>

      <div className="flex items-center gap-6">
        <button
          onClick={onDecrease}
          className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors"
        >
          <IoRemoveOutline size={20} />
        </button>

        <span className="text-4xl font-black text-slate-800 tabular-nums">
          {count}
        </span>

        <button
          onClick={onIncrease}
          className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-green-100 hover:text-green-500 transition-colors"
        >
          <IoAddOutline size={20} />
        </button>
      </div>
    </WhiteCard>
  );
};

export const BlackBears = () => {
  const blackBears = useBearStore((state) => state.blackBears);
  const increaseBlackBears = useBearStore((state) => state.increaseBlackBeards);
  return (
    <BearCounterCard
      label="Osos Negros"
      count={blackBears}
      onIncrease={() => increaseBlackBears(+1)}
      onDecrease={() => increaseBlackBears(-1)}
      color="indigo"
    />
  );
};

export const PolarBears = () => {
  const polarBears = useBearStore((state) => state.polarBears);
  const increasePolarBears = useBearStore((state) => state.increasePolarBeards);
  return (
    <BearCounterCard
      label="Osos Polares"
      count={polarBears}
      onIncrease={() => increasePolarBears(+1)}
      onDecrease={() => increasePolarBears(-1)}
      color="cyan"
    />
  );
};

export const PandaBears = () => {
  const pandaBears = useBearStore((state) => state.pandaBears);
  const increasePandaBears = useBearStore((state) => state.increasePandaBears);
  return (
    <BearCounterCard
      label="Osos Pandas"
      count={pandaBears}
      onIncrease={() => increasePandaBears(+1)}
      onDecrease={() => increasePandaBears(-1)}
      color="emerald"
    />
  );
};

export const BearDisplay = () => {
  const bears = useBearStore(useShallow((state) => state.bears));
  const addBear = useBearStore((state) => state.addBear);
  const clearBears = useBearStore((state) => state.clearBears);

  return (
    <WhiteCard>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">Listado de Osos</h2>
        <div className="flex gap-2">
          <button
            onClick={addBear}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2"
          >
            <IoAddOutline /> Agregar
          </button>
          <button
            onClick={clearBears}
            className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2"
          >
            <IoTrashOutline /> Limpiar
          </button>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 overflow-hidden shadow-inner">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
          {JSON.stringify(bears, null, 2)}
        </pre>
      </div>
    </WhiteCard>
  );
};
