import React from 'react';
import axios from 'axios';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
function App() {

  const lat = 42.346268;
  const long = -71.095764;
  const gate = "https://cbi-store-api-qa.herokuapp.com/v3/stores/?apiKey=compass&signature=0QJkbTzuM/WSxz9oGuUnPR4uJtGjZ4PHEUfgNJ56L/0=&beverageType=beer&latitude=" + lat + "&longitude=" + long + "&radius=5&searchText=Safe%2A"
// https://cbi-store-api-qa.herokuapp.com/v3/stores/?apiKey=compass&signature=0QJkbTzuM/WSxz9oGuUnPR4uJtGjZ4PHEUfgNJ56L/0=&beverageType=beer&latitude=37.33233141&longitude=-122.0312186&radius=5&searchText=Safe%2A
  const getInfo = () => {
    axios.get(gate).then((response)=> {
      console.log(response);
    })
  }

  
  const getJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
      console.log(response);
    })
  }

  return (
    <ChakraProvider>
        <div className="App">

        <button onClick={getJoke}>Get Joke Right now</button>

        <br></br>

        <button onClick={getInfo}>Get your CBI Information</button>

        </div>
    </ChakraProvider>
  );
}

export default App;
