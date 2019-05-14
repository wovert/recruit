import React from "react"
import './logo.less'
import logo from './logo.png'

export default function Logo () {
  return (
    <figure className="logo-wrapper">
      <img src={logo} alt="供求直蝘" className="logo-img" />
    </figure>
  )
}