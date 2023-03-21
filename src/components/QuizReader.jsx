import React, { useState } from "react"
import FileInput from "./FileInput"
import TextInput from "./TextInput"
import Result from "./Result"
import FloatBox from "./FloatBox"



export default function Quizbox() {
  const [data, setData] = useState()
  const [practice, setPractice] = useState(false)
  const [revealAnswer, setRevealAnswer] = useState(true)
  // console.log("practice",practice)
  return (
    <div className="max-w-lg mx-auto">
      <FileInput data={data} setter={setData} />
      <TextInput data={data} setter={setData} />
      <FloatBox>
        <div onClick={() => setPractice((value) => !value)}>
          <input type={"checkbox"} checked={practice} className="m-2" />
          Practice?
        </div>
        {practice && (
          <div onClick={() => setRevealAnswer((value) => !value)}>
            <input type={"checkbox"} checked={revealAnswer} className="m-2" />
            Auto Checked Answer
          </div>
        )}
        <button
          onClick={() => setData(null)}
          className="rounded-full bg-slate-500 p-2 text-white"
        >
          Reset Data
        </button>
      </FloatBox>
      <Result data={data} practice={practice} revealAnswer={revealAnswer} />
    </div>
  );
}