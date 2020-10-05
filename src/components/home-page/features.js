import React from "react"
import containerStyles from "./features.module.scss"
import { BsFillGrid3X3GapFill } from "react-icons/bs"
import { FaCalculator } from "react-icons/fa"
import { FaBook } from "react-icons/fa"

export default function Features() {
  return (
    <div className={containerStyles.container}>
      <ul>
        <li>
          <span>
            <BsFillGrid3X3GapFill size={30} />
          </span>
          <h4>50+ print products with lots of option to customize</h4>
        </li>
        <li>
          <span>
            <FaCalculator size={30} />
          </span>
          <h4>Instant estimate with expert recommendation</h4>
        </li>
        <li>
          <span>
            <FaBook size={30} />
          </span>
          <h4>Get a sample before finalizing the order</h4>
        </li>
      </ul>
    </div>
  )
}
