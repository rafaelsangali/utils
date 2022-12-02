import { useAutoAnimate } from '@formkit/auto-animate/react';
import useTasksStore from "../core/tasks";
import Task from "./Task";

const Arry_Tasks = () => {
  const {tasks} = useTasksStore(state => state)
  const [animate] = useAutoAnimate()

return (
  <section className="mt-12" ref={animate as any}>
    {tasks.map(({task}, index:number) => (
    <Task task={task} index={index}/>
    ))}
  </section>
)
}

export default Arry_Tasks