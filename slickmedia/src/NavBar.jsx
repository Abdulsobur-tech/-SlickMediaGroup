import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    background-color: #292929;
    width: 100%;
    height: 140px;
    
    h1{
        width: 156.7px;
        margin-left: 30px;
        padding-top: 30px;
        color: #FFFFFF;
        width: 156.7px;
        
    }
`

function NavBar() {
  return (
    <Nav>
        <h1>MyTestApp</h1>
    </Nav>
  )
}

export default NavBar