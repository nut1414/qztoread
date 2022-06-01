import React from "react"

export default function FloatBox(props) {
  return (
    <div className="bg-white box-content rounded-lg p-5 m-5 space-y-2 shadow-inner">
      {props.children}
    </div>
  )
}