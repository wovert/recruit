import React, { Component  } from "react"
import './logo.less'
import logo from './logo.png'

export default function Logo () {
  return (
    <figure className="logo-wrapper">
      <img src={logo} alt="供求直聘" className="logo-img" />
    </figure>
  )
}