import { IoReorderTwoOutline, IoTrashOutline } from "react-icons/io5";
import { Task } from "../../interfaces";
import { useTaskStore } from "../../stores";
import Swal from "sweetalert2";

interface Props {
  task: Task;
}

export const SingleTask = ({ task }: Props) => {
  const setDraggingTaskId = useTaskStore((state) => state.setDraggingTaskId);
  const removeDraggingTaskId = useTaskStore(
    (state) => state.removeDraggingTaskId
  );
  const removeTask = useTaskStore((state) => state.removeTask);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que se active el drag al hacer click

    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        removeTask(task.id);
      }
    });
  };
  return (
    <div
      draggable
      onDragStart={() => setDraggingTaskId(task.id)}
      onDragEnd={() => removeDraggingTaskId()}
      className="bg-white p-4 mb-3 rounded-xl shadow-sm border border-slate-100 
        hover:shadow-md hover:border-slate-200 cursor-grab active:cursor-grabbing
        transition-all duration-200 ease-in-out flex items-center justify-between group"
    >
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-slate-700 leading-tight">
          {task.title}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {/* Botón de Eliminar (Solo visible al hacer hover sobre la tarjeta o siempre visible si prefieres) */}
        <button
          onClick={handleDelete}
          className="text-slate-400 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50"
        >
          <IoTrashOutline size={18} />
        </button>

        <span className="text-slate-400 cursor-grab">
          <IoReorderTwoOutline size={20} />
        </span>
      </div>
    </div>
  );
};
