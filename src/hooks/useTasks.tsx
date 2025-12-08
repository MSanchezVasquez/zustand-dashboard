import { DragEvent, useState } from "react";
import Swal from "sweetalert2";

import { useTaskStore } from "../stores";
import { TaskStatus } from "../interfaces";

interface Options {
  status: TaskStatus;
}

export const useTasks = ({ status }: Options) => {
  const isDragging = useTaskStore((state) => !!state.dragginTaskId);
  const onTaskDrop = useTaskStore((state) => state.onTaskDrop);
  const addTask = useTaskStore((state) => state.addTask);
  const [onDragOver, setOnDragOver] = useState(false);

  const handleAddTask = async () => {
    const resp = await Swal.fire({
      title: "Nueva Tarea",
      input: "text",
      inputLabel: "Titulo de la tarea",
      inputPlaceholder: "Ingrese el titulo de la tarea",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "El titulo es obligatorio";
        }
      },
    });

    if (!resp.value) return;
    console.log(resp);

    addTask(resp.value, status);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(true);
  };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(false);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(false);
    onTaskDrop(status);
  };

  return {
    isDragging,
    onDragOver,
    handleAddTask,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
