import React from "react"
import Problem from "./Problem"

export default function Result(props) {
  const updateResult = () => {
    if (props.data){
      const problemsList = props.data.map((problem) => {
        return (
          <Problem
            revealAnswer={props.revealAnswer}
            key={problem.id}
            question={problem.question}
            practice={props.practice}
            choices={problem.choices}
            answers={problem.answers}
          />
        );
      })
      return problemsList
    }
  }
  if(props.data)
  return (
    <div className="py-2">
      <div className="text-white text-2xl">Result</div>
      {updateResult()}
    </div>
  )
}