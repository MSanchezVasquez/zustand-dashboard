import { IoAddOutline, IoEllipsisHorizontalOutline } from "react-icons/io5";
import classNames from "classnames";
import { Task, TaskStatus } from "../../interfaces";
import { SingleTask } from "./SingleTask";
import { useTasks } from "../../hooks/useTasks";

interface Props {
  title: string;
  tasks: Task[];
  status: TaskStatus;
}

export const JiraTasks = ({ title, status, tasks }: Props) => {
  const {
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleAddTask,
    isDragging,
    onDragOver,
  } = useTasks({ status });

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={classNames(
        "relative flex flex-col rounded-2xl w-full p-4 transition-all duration-300 border border-transparent",
        {
          // Estado normal
          "bg-slate-100/50": !isDragging,
          // Estado cuando estoy arrastrando algo globalmente
          "bg-slate-100 border-slate-200 border-dashed":
            isDragging && !onDragOver,
          // Estado cuando estoy justo encima de esta columna (Drop Zone)
          "bg-indigo-50 border-indigo-200 ring-2 ring-indigo-500/20":
            isDragging && onDragOver,
        }
      )}
    >
      {/* --- Header de la Columna --- */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          {/* Badge de color según estado (opcional, aquí uso uno genérico indigo) */}
          <div
            className={classNames("w-3 h-3 rounded-full", {
              "bg-slate-400": status === "open",
              "bg-indigo-500": status === "in-progress",
              "bg-emerald-500": status === "done",
            })}
          />

          <h4 className="text-base font-bold text-slate-700">{title}</h4>

          <span className="text-xs font-semibold text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full">
            {tasks.length}
          </span>
        </div>

        <button className="text-slate-400 hover:text-slate-600">
          <IoEllipsisHorizontalOutline />
        </button>
      </div>

      {/* --- Lista de Tareas --- */}
      <div className="flex-1 overflow-y-auto min-h-[150px] custom-scrollbar space-y-3">
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>

      {/* --- Botón Agregar (Estilo Ghost) --- */}
      <button
        onClick={handleAddTask}
        className="mt-4 flex items-center justify-center gap-2 w-full py-2 text-slate-500 hover:text-indigo-600 hover:bg-white rounded-xl transition-all duration-200 text-sm font-semibold border border-transparent hover:border-slate-200 shadow-none hover:shadow-sm"
      >
        <IoAddOutline size={18} />
        Nueva Tarea
      </button>
    </div>
  );
};
