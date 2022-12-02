import create from "zustand";

interface ITask {
  task:string
  id:number
}

interface Store {
  tasks: ITask[]
  addTask: (task: ITask) => void
  delTask: (item:string) => void
  up: (index:number) => void
  down: (index:number) => void
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

  down:(index:number) => {
    set(state => {
      let el = state.tasks[index]
      if(index !== state.tasks.length){
        state.tasks.splice(index, 1)
        state.tasks.splice(index+1, 0, el)
        return {tasks: state.tasks}
      }
      else { return {tasks: state.tasks}}
    })
  },
  
    up:(index:number) => {
    set(state => {
      let el = state.tasks[index]
      if(index !== 0){
        state.tasks.splice(index, 1)
        state.tasks.splice(index-1, 0, el)
        return {tasks: state.tasks}
      }
      else { return {tasks: state.tasks}}
    })
  },

}))

export default useTasksStore