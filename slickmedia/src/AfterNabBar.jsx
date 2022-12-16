import React from 'react'
import styled from 'styled-components'
import rectangle from "./images/rectangle.svg"

const BackgroundImage = styled.div`
h1{
width: 490px;
height: 282px;
font-size: 40px;
color: white;
}
`


function AfterNabBar() {
  return (
    <BackgroundImage style={{backgroundImage:`url(${rectangle})`}}>
        {/* <img src={rectangle} alt="" /> */}
        <div style={{padding: "100px 40px"}}>
        <h1>Watch <br /> Somthing <br /> Incredible</h1>
        </div>
    </BackgroundImage>
  )
}

export default AfterNabBar