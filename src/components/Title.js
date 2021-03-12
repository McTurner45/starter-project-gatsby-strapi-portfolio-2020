import React from "react"

const Title = ({tittle}) => {
  return <div className="section-title">
    <h1>{tittle || "default tittle"}</h1>
    <div className="underline"></div>
  </div>
}

export default Title
