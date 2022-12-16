import React, { useState,useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { error } from 'email-deep-validator/lib/logger'

const Body = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div{
        margin-top: 40px;
        background-color: black;
        width: 15%;
        height: 200px;
    }
`
// eslint-disable-next-line react-hooks/rules-of-hooks

function Content() {
    const [movies,setMovies] = useState([])
// const url = 



const getAllMovies = () => {
    // ["home","got", "life", "love", "god","war","work","saint","life"].forEach(title =>{
        axios.get(`http://www.omdbapi.com/?t=movie&y=2013&plot=full`)
        .then((response) => {
            console.log(response);
    const allMovioes = response
    setMovies([allMovioes])
        })
        .catch(error => console.error(` Error : ${error}`))
    
}

useEffect(() => {
    getAllMovies();
},[])
 console.log(movies, "dddd")
  return (
    <Body>

        <div>Movie titlet</div>
        <div>Movie titlet</div>
        <div>Movie titlet</div>
        <div>Movie titlet</div>
        {/* <div></div>
        <div></div>
        <div></div> */}
        {/* {
            movies && movies.map((value,index)=> {
                // return (
                //     // <h1>{value.data.Title}</h1>
                //     // <h1>{value.title}</h1>
                // )
            })
        } */}
    </Body>
  )
    }


export default Content