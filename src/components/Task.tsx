import { memo } from "react";
import shallow from "zustand/shallow";
import useTasksStore from "../core/tasks";

function Task({ task, index }: { task: string, index: number }) {
  const { delTask, up, down } = useTasksStore(state => state, shallow)

  return (
    <>
      <div className="grid grid-cols-3 items-center gap-4 " key={Math.random()}>
        <span className="p-2 bg-blue-200 rounded-md col-span-2 text-black flex justify-center my-2">
          {task}
        </span>
        <div className="flex gap-1">
          <button
            className="bg-teal-500 hover:bg-teal-600 h-8 w-8 transition-colors rounded-md text-white"
            type="button"
            onClick={() => up(index)}
          >
            ↑
          </button>
          <button
            className="bg-cyan-500 hover:bg-cyan-600 h-8 w-8 transition-colors rounded-md text-white"
            type="button"
            onClick={() => down(index)}
          >
            ↓
          </button>
          <button
            className="btn-error h-8 w-8 transition-colors rounded-md text-white"
            type="button"
            onClick={() => delTask(task)}
          >
            x
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(Task)