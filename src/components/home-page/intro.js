import React from "react"
import containerStyles from "./intro.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Intro() {
  const data = useStaticQuery(graphql`
    query {
      introduction: file(relativePath: { eq: "intro.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 847) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <div className={containerStyles.container}>
      <h3>Your friendly neighborhood printing press</h3>
      <Img
        fluid={data.introduction.childImageSharp.fluid}
        style={{ maxWidth: "847px", margin: "0 auto" }}
        alt="Introduction"
      />
      <p>
        We are in this industry since 80's for providing reliable printing
        services. Our journey started with a single letterpress machine and have
        raised up to modern multi-colour offset printing machines along with a
        host of Post Press Machines to craft a wide range of print products at
        premium quality.
      </p>
      <p>
        "With great power comes great responsibility" - and hence we ensure
        every order is processed with utmost dedication and sincerity for
        providing best value for your money.
      </p>
    </div>
  )
}
