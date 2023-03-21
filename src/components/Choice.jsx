import React, { useState } from "react"

export default function Choice(props) {
  const [isAnswer, setIsAnswer] = useState(false)
  console.log(isAnswer)
  return (
    <label
      className={`inline-block p-2 ${
        props.revealAnswer && isAnswer && props.checked ? "bg-green-200" : ""
      }`}
    >
      {props?.practice ? (
        <input type="checkbox" onClick={() => setIsAnswer((value) => !value)} />
      ) : (
        <input type="checkbox" checked={props.checked} readOnly />
      )}
      <div
        className="inline-block p-2"
        dangerouslySetInnerHTML={{ __html: props.label }}
      />
    </label>
  );
}