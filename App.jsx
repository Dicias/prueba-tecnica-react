import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import './style.css'
const App = () =>{
const [load, setLoad] = useState(false);
const [fact, setFact] = useState('');
const [image, setImage] = useState('');
let firstWord = '';
useEffect(()=>{
  axios.get('https://catfact.ninja/fact')
  .then(response => {
    setFact(response.data.fact)
    const firstWord = response.data.fact.split(' ')[0];
    setImage(`https://cataas.com/cat/says/${firstWord}`)
    console.log(firstWord);
    setLoad(true);
  })  
},[]) 

if(!load){
  return <>
  <div>
  <h1>Loading...</h1>
  </div>
  </>
}
else{
  return <>
  <div className="card" style={{display: 'flex'}}>
  <h1>  {fact} </h1>
  <img src={image} />
  </div>
  </>
}
}

export default App;