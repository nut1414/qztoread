import React from "react"

export default function Choice(props) {
  return (
    <label className="inline-block p-2">
      <input type="checkbox" checked={props.checked} readOnly/>
      <div className="inline-block p-2" dangerouslySetInnerHTML={{__html:props.label}}/>
    </label>
  
  )
}