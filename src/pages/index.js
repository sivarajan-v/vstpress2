import React from "react"
import Navbar from "../components/navbar"
import Banner from "../components/home-page/banner"
import Features from "../components/home-page/features"
import Intro from "../components/home-page/intro"
import SectionDivider from "../components/home-page/section-divider"

export default function () {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <SectionDivider />
      <Intro />
    </div>
  )
}
