import React from 'react'
import "../Styles/cardcomponent.css"
const Cardcompnent = (props) => {
    const bg = props.background
    const price = props.price
  return (
    <>
        <div id='card' style={{background:bg}}>
        <div id='content'>
        <h1>{price}</h1>
        <p>{props.text}</p>
        </div>
        </div>
    </>
  )
}

export default Cardcompnent