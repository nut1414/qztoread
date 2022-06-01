import React, { useRef } from "react"
import FloatBox from "./FloatBox.jsx"

export default function TextInput(props) {
  const textRaw = useRef()

  const handleChange = (e) => {
      try{
        const obj = JSON.parse(textRaw.current.value)
        if (Array.isArray(obj.questions))
        {
          props.setter(obj.questions)
        } else throw(Error('Invalid Input'))
        
      } catch(e){
        console.log(e)
        alert('Invalid Input')
      }
      
    }
  

  return (
    <FloatBox>
      <div className="text-left text-lg tracking-wide pb-2 font-bold">
        <span className="text-blue-800">Enter </span>
        <span>Raw Data</span>
      </div>
      <div className="my-2 ">
        <textarea ref={textRaw} className="text-sm resize-y rounded-md min-w-[85%] bg-gray-100 p-2 " />
      </div>
      <div className="text-right">
        <button onClick={handleChange} className="px-4 py-2 text-white text-sm bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none rounded-full">Show</button>
      </div>
    </FloatBox>
    
  )
}