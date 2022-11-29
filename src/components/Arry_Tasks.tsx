import { useAutoAnimate } from '@formkit/auto-animate/react'
import useTasksStore from "../stores/tasks"

const Arry_Tasks = () => {
  const task = useTasksStore(state => state.tasks)
  const del = useTasksStore(state => state.delTask)
  const sort = useTasksStore(state => state.sortTask)
  const [animate] = useAutoAnimate({disrespectUserMotionPreference: true})

return (
  <section className="mt-12" ref={animate as any}>
    {task.map(({task}) => (
    <div className='grid grid-cols-3 items-center gap-4 ' key={Math.random()}>
      <span className="p-2 bg-blue-200 rounded-md col-span-2 text-black flex justify-center my-2">{task}</span>
      <div className="flex gap-1">
        <button className="btn-accent h-8 w-8 transition-colors rounded-md text-white" type="button"
        onClick={() => sort()}>⇅</button>
         <button className="btn-error h-8 w-8 transition-colors rounded-md text-white" type="button" 
         onClick={() => del(task)}>x</button>
      </div>
    </div>
    ))}
  </section>
)
}

export default Arry_Tasks