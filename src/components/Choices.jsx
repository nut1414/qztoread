import React from "react"
import Choice from './Choice'

export default function Choices(props) {
  const choiceList = props.choices.map((choice) => {
    return <Choice revealAnswer={props.revealAnswer} practice={props.practice} key={choice.id} checked={choice.is_expected} label={choice.choice_desc}/>
  })
  return choiceList
}