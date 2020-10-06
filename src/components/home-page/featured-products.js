import React from "react"
import style from "./featured-products.module.scss"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function FeaturedProducts() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "featured-products" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  var products = [
    {
      key: 1,
      title: "Business Card",
      img: "business-card.jpg",
    },
    {
      key: 2,
      title: "Brochure",
      img: "brochure.jpg",
    },
  ]
  data.allFile.edges.forEach(({ node }) => {
    products.forEach(prod => {
      if (node.base === prod.img) {
        prod.imgData = node.childImageSharp.fluid
      }
    })
  })
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className={style.container}>
      <h3>Featured Products</h3>
      <div className={style.productList}>
        <Slider {...settings}>
          {products.map(prod => (
            <div key={prod.key} className={style.product}>
              {<Img fluid={prod.imgData} />}
              <figcaption>{prod.title}</figcaption>
            </div>
          ))}
        </Slider>
      </div>
      <button>Show All</button>
    </div>
  )
}
