import React from "react"
import bg from "../../images/bg.jpg"
import highlow from "../../images/high-low.png"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Banner() {
  const data = useStaticQuery(graphql`
    query {
      productBanner: file(relativePath: { eq: "products-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 850) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

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
      <Img
        fluid={data.productBanner.childImageSharp.fluid}
        style={{ maxWidth: "850px", margin: "0 auto" }}
        alt="Print Products"
      />
    </div>
  )
}
