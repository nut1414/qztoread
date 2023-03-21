import React, { useLayoutEffect, useRef } from "react"
import Choices from "./Choices"
import FloatBox from "./FloatBox"

function AnswerPeople(props) {
  if (props.answers){
    const count = props.answers.length
    const correctcount = props.answers.reduce((prev, cur) => prev + cur.correct,0)
    return (<div className="text-xs">{correctcount} out of {count} answered this question correctly.</div>)
  }
}


export default function Problem(props) {
  const qtEl = useRef()

  

  useLayoutEffect(() => {
    if (qtEl.current){
      const a = qtEl.current.getElementsByTagName('img')
      //for some reason forEach doesn't work with HTMLElement
      for (let i = 0; i< a.length; i++){
        a[i].style.width = '100%'  
      }
    }
  })
  // console.log(props)
  return (
    <FloatBox>
      <div
        className="font-bold"
        ref={qtEl}
        dangerouslySetInnerHTML={{ __html: props?.question }}
      ></div>
      <div>
        <Choices
          revealAnswer={props.revealAnswer}
          practice={props.practice}
          choices={props.choices}
        />
      </div>
      <AnswerPeople answers={props.answers} />
    </FloatBox>
  );
}