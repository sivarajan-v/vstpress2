import React from "react"
import bg from "../../images/bg.jpg"
import highlow from "../../images/high-low.png"
import productBanner from "../../images/products-banner.webp"

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        textAlign: "center",
        padding: "50px 20px 0",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "35px",
        }}
      >
        Commercial Printing Press
      </h1>
      <img
        style={{
          maxWidth: "100%",
          display: "block",
          margin: " 0 auto",
        }}
        src={highlow}
        alt="High Quality is now possible at Low Price"
      />
      <img
        style={{
          maxWidth: "100%",
          display: "block",
          margin: " 0 auto",
        }}
        src={productBanner}
        alt="Print Products"
      />
    </div>
  )
}
