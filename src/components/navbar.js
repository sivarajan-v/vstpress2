import React from "react"
import logo from "../images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Navbar() {
  return (
    <div>
      <img src={logo} alt="logo" style={{ margin: "10px", height: "50px" }} />
      <div
        style={{
          color: "#0088C8",
          float: "right",
          margin: "20px",
        }}
      >
        <GiHamburgerMenu size={30} />
      </div>
    </div>
  )
}
