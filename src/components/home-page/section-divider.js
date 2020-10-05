import React from "react"
import { TiStar } from "react-icons/ti"

export default function SectionDivider() {
  return (
    <div
      style={{
        width: "100%",
        height: "16px",
        textAlign: "center",
        margin: "36px, auto, 20px",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #ccc",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      ></div>
      <div
        style={{
          color: "#ccc",
          marginTop: "-15px",
          backgroundColor: "white",
          width: "30px",
          display: "inline-flex",
          border: "1px solid #ccc",
          borderRadius: "50%",
        }}
      >
        <TiStar size={30} />
      </div>
    </div>
  )
}
