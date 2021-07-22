import React from 'react';
import axios from 'axios';
import './App.css';
import CreateItems from "./components/CreateItems"
import Items from "./components/Items"


function App() {

  const lat = 42.346268;
  const long = -71.095764;
  const rad = 50;
  const gate = "https://cbi-store-api-qa.herokuapp.com/v3/stores/?apiKey=compass&signature=0QJkbTzuM/WSxz9oGuUnPR4uJtGjZ4PHEUfgNJ56L/0=&beverageType=beer&latitude=" + lat + "&longitude=" + long + "&radius="+ rad +"&searchText=Safe%2A";
   const inf = [];


// API REQUEST Strings
/* https://cbi-store-api-qa.herokuapp.com/v3/stores/?apiKey=compass&signature=0QJkbTzuM/WSxz9oGuUnPR4uJtGjZ4PHEUfgNJ56L/0=&beverageType=beer&latitude=37.33233141&longitude=-122.0312186&radius=5&searchText=Safe%2A
  https://cbi-store-api-qa.herokuapp.com/v3/stores/?apiKey=compass&signature=0QJkbTzuM/WSxz9oGuUnPR4uJtGjZ4PHEUfgNJ56L/0=&beverageType=beer&latitude=42.346268&longitude=-71.095764&radius=50&searchText=Safe%2A
  "https://cbi-store-api-qa.herokuapp.com/v3/stores/?apiKey=compass&signature=0QJkbTzuM/WSxz9oGuUnPR4uJtGjZ4PHEUfgNJ56L/0=&beverageType=beer&latitude=42.346268&longitude=-71.095764&radius=1" */


  const GetInfo = () => {
    axios.get(gate).then((response)=> {
      
      // Response.data is an array
      {/* Loop through the response and create a li element called item */}
      {response.data.map(storeInfo => (<Items key={Date.now()} storeName={storeInfo.storeName} storeType={storeInfo.storeType} />))}

      
      // console.log(response.data[0].storeName);
      // console.log(response.data);
    })
  }
  return (

    <div className="App">
      <button onClick={GetInfo}>Get your CBI Information</button>
      <ul>
        <GetInfo />
      </ul>
      

    </div>
    
  );
}

export default App;
