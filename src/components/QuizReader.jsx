import React, { useState } from "react"
import FileInput from "./FileInput"
import TextInput from "./TextInput"
import Result from "./Result"



export default function Quizbox() {
  const [data, setData] = useState()
  return (
      <div className="max-w-lg mx-auto">
        <FileInput data={data} setter={setData}/>
        <TextInput data={data} setter={setData}/>
        <Result data={data}/>
      </div>
      
  )
}