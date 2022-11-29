import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Arry_Tasks from './components/Arry_Tasks';
import useTasksStore from './stores/tasks';

const schema = yup.object({
  task: yup.string()
  .required('Por favor preencha o campo')
  .min(2, 'Precisa de ter pelo menos 2 caracter')
  .trim(),
}).required();


function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const task = useTasksStore(state => state.addTask)
  
  const onSubmit = (data: any) => {
    console.log(data)
    task(data)
  }
  return (
    <main className="p-8 grid md:grid-cols-2 h-screen">
      <section>
        <form className="grid grid-cols-3 items-center gap-4 relative" onSubmit={handleSubmit(onSubmit)}>
        <p className='absolute top-10'>{errors?.task?.message as string}</p>
        <input className="p-2 bg-white text-black rounded-md col-span-2"  {...register('task')} />
        <button className="btn-primary h-8 w-8 transition-colors rounded-md text-white" type="submit">✓</button>
        </form>
        <Arry_Tasks />
      </section>
    </main>
  )
}
export default App