
import React from 'react'
import axios from "axios"
import Header from './Header'

const API_Key = "27a3ea58e61d452307f5143c4643afba"
const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"

const Main = () => {
  return (
    <div className="main">
       <Header/>
      
    </div>
  )
}

export default Main
