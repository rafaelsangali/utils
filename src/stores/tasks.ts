import create from "zustand";

interface ITask {
  task:string
  id:number
}

interface Store {
  tasks: ITask[]
  addTask: (task: ITask) => void
  delTask: (item:string) => void
  sortTask: () => void
}

const useTasksStore = create<Store>((set) => ({
  tasks: [],

  addTask: (item:ITask) => {
    set((state) => ({ tasks: state.tasks.filter(({task}) => task == item.task).length > 0 ? 
    state.tasks : [...state.tasks, {...item, id: Math.random()}] }))
  },

  delTask:(item:string) => {
    set(state =>   ({ tasks: state.tasks.filter(({task}) => task !== item)}))
  },

  sortTask:() => {}
}))

export default useTasksStore