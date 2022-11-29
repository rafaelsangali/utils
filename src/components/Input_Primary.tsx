interface Input_Solid extends React.InputHTMLAttributes<HTMLInputElement>{}

export default function Input_Primary(props:Input_Solid){

  return (
    <input className="min-w-[220px] p-2 bg-white text-black rounded-md" {...props} />
  )
}