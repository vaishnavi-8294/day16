
import React from 'react'
import Cards from './components/Cards'
import batsman from'./assets/vk.jpeg'
import hitman from  './assets/rs.jpeg'
import bowler from  './assets/bm.jpeg'
import './App.css'

function App() {
  return (
    <>
    <h1>Welcome to componenets</h1>
    <Cards pic={bowler} title=" Jasprit Bumrah" desc=" Yorker King" />
    <Cards pic={batsman} title="Virat Kohli" desc="Agressive Batsman"/>
    <Cards pic={hitman} title="Rohit Sharma" desc ="A Hitman"/>
    
    </>
  )
}

export default App