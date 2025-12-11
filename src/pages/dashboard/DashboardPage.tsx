import {
  IoAccessibilityOutline,
  IoHeartOutline,
  IoListOutline,
  IoLockClosedOutline,
  IoPawOutline,
} from "react-icons/io5";
import { WhiteCard } from "../../components";
import {
  useAuthStore,
  useBearStore,
  usePersonStore,
  useTaskStore,
} from "../../stores";
import { useTranslation } from "react-i18next";


export const Dashboard = () => {
  const { t } = useTranslation();

  const totalBears = useBearStore((state) => state.totalBears);
  const firstName = usePersonStore((state) => state.firstName);
  const tasks = useTaskStore((state) => state.tasks);
  const user = useAuthStore((state) => state.user);

  const taskCount = Object.keys(tasks).length;

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          {t("dashboard.title")}
          
        </h1>

        <p className="text-slate-500 mt-2 font-medium">
          {t("dashboard.subtitle")}
        </p>
      </div>

      <hr className="mb-8 border-slate-200" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* --- Card: Osos (Indigo) --- */}
        <WhiteCard className="!p-8 flex items-center justify-between hover:ring-2 hover:ring-indigo-100 cursor-default">
          <div>
            <p className="text-slate-500 font-medium mb-1">
              {t("dashboard.totalBears.label")}
            </p>
            <h2 className="text-4xl font-black text-slate-800">
              {totalBears()}
            </h2>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
            <IoPawOutline size={35} />
          </div>
        </WhiteCard>

        {/* --- Card: Persona (Violet) --- */}
        <WhiteCard className="!p-8 flex items-center justify-between hover:ring-2 hover:ring-violet-100 cursor-default">
          <div>
            <p className="text-slate-500 font-medium mb-1">
              {t("dashboard.person.label")}
            </p>
            <h2 className="text-2xl font-bold text-slate-800 truncate max-w-[150px]">
              {firstName || t("dashboard.person.noName")}
            </h2>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600 shadow-sm">
            <IoAccessibilityOutline size={35} />
          </div>
        </WhiteCard>

        {/* --- Card: Tareas (Emerald) --- */}
        <WhiteCard className="!p-8 flex items-center justify-between hover:ring-2 hover:ring-emerald-100 cursor-default">
          <div>
            <p className="text-slate-500 font-medium mb-1">
              {t("dashboard.tasks.label")}
            </p>
            <h2 className="text-4xl font-black text-slate-800">{taskCount}</h2>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm">
            <IoListOutline size={35} />
          </div>
        </WhiteCard>

        {/* --- Card: Boda (Rose) --- */}
        <WhiteCard className="!p-8 flex items-center justify-between hover:ring-2 hover:ring-rose-100 cursor-default">
          <div>
            <p className="text-slate-500 font-medium mb-1">
              {t("dashboard.wedding.label")}
            </p>
            <h2 className="text-xl font-bold text-slate-800">
              {t("dashboard.wedding.comingSoon")}
            </h2>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 shadow-sm">
            <IoHeartOutline size={35} />
          </div>
        </WhiteCard>

        {/* --- Card: Auth (Amber) --- */}
        <WhiteCard className="!p-8 flex items-center justify-between hover:ring-2 hover:ring-amber-100 cursor-default col-span-1 md:col-span-2 lg:col-span-1">
          <div>
            <p className="text-slate-500 font-medium mb-1">
              {t("dashboard.user.label")}
            </p>
            <h2 className="text-lg font-bold text-slate-800">
              {user?.fullName || t("dashboard.user.unknown")}
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              {user?.email}
            </span>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm">
            <IoLockClosedOutline size={35} />
          </div>
        </WhiteCard>
      </div>
    </>
  );
};
