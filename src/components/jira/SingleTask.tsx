import { IoReorderTwoOutline } from "react-icons/io5";
import { Task } from "../../interfaces";
import { useTaskStore } from "../../stores";

interface Props {
  task: Task;
}

export const SingleTask = ({ task }: Props) => {
  const setDraggingTaskId = useTaskStore((state) => state.setDraggingTaskId);
  const removeDraggingTaskId = useTaskStore(
    (state) => state.removeDraggingTaskId
  );
  return (
    <div
      draggable
      onDragStart={() => setDraggingTaskId(task.id)}
      onDragEnd={() => removeDraggingTaskId()}
      className="bg-white p-4 mb-3 rounded-xl shadow-sm border border-slate-100 
        hover:shadow-md hover:border-slate-200 cursor-grab active:cursor-grabbing
        transition-all duration-200 ease-in-out flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-slate-700 leading-tight">
          {task.title}
        </p>
      </div>
      <span className="text-slate-400 hover:text-slate-600 transition-colors">
        <IoReorderTwoOutline size={20} />
      </span>
    </div>
  );
};
