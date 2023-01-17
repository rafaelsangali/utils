import { useState } from "react";
import { emojis } from "../constants/emojis";

export default function Arry_Manipulate(){

  const arry = emojis.slice(0,4)
  const [arryEmojis, setArryEmojis] = useState<string[]>(arry)
  const [message, setMessage] = useState<string>('')
  const random = emojis[(Math.ceil(Math.random() * emojis.length))]

  const push = () => {
    const arry = [...arryEmojis]
    arry.push(random)
    setMessage('ADDS to the END of an array')
    setArryEmojis(arry)
  }

  const unshift = () => {
    const arry = [...arryEmojis]
    arry.unshift(random)
    setMessage('ADDS to the BEGINNING of an array')
      setArryEmojis(arry)
  }

  const pop = () => {
    const arry = [...arryEmojis]
    arry.pop()
    setMessage('REMOVES the LAST element')
    setArryEmojis(arry)
  }
  const shift = () => {
    const arry = [...arryEmojis]
    arry.shift()
    setMessage('REMOVES the FIRST element')
    setArryEmojis(arry)
  }

  const reverse = () => {
    const arry = [...arryEmojis]
    arry.reverse()
    setMessage('REVERSES an array')
    setArryEmojis(arry)
  }

  return (
    <>
    <div className="flex gap-4">
      <button onClick={() => push()}>Push</button>
      <button onClick={() => pop()}>Pop</button>
      <button onClick={() => unshift()}>Unshift</button>
      <button onClick={() => shift()}>Shift</button>
      <button onClick={() => reverse()}>Reverse</button>
    </div>
    <i  className="h-5">
    {message}
    </i>
      <p>
        {arryEmojis.map((item:string) => (
          item
        ))}
      </p>
    </>
  )
}