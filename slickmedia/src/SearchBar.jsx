import React from 'react'
import styled from 'styled-components'

const Search = styled.div`
margin-top: 30px;
margin-left: 10px;
   h1{ color: black;
   }

 input{
    width: 80%;
height: 54px;

border: 1px solid #000000;
   }
`

function SearchBar() {
  return (
    <Search>
        <h1>Search</h1>
        <input type="text" placeholder='Search here'/>
    </Search>
  )
}

export default SearchBar