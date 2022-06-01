import React, { useRef } from "react"
import FloatBox from "./FloatBox.jsx"

export default function DataInput(props) {
  const fileUpload = useRef()

  const handleChange = (e) => {
    const fileReader = new FileReader()
    fileReader.readAsText(fileUpload.current.files[0], 'utf-8')
    fileReader.onload = (e) => {
      try{
        const obj = JSON.parse(e.target.result)
        if (Array.isArray(obj.questions))
        {
          props.setter(obj.questions)
        } else throw(Error('Invalid File'))
        
      } catch(e){
        console.log(e)
        alert('Invalid File')
      }
      
    }
  }

  return (
    <FloatBox>
      <div className="text-left text-lg tracking-wide pb-2 font-bold">
        <span className="text-red-800">Open </span>
        <span >JSON File</span>
      </div>
      <div >
        <input ref={fileUpload} type="file"  className="text-sm file:rounded-full file:bg-gray-300 file:px-4 file:py-2 file:border-0 file:text-m file:hover:bg-gray-400 file:active:bg-gray-500" />
      </div>
      <div className="text-right">
        <button onClick={handleChange} className="px-4 py-2 text-white text-sm bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none rounded-full">Show</button>
      </div>
    </FloatBox>
    
  )
}