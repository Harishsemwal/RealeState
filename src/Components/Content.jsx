import React from 'react'
import "../Styles/content.css"
import Cityproperty from './Cityproperty'
import Cardcompnent from './Cardcompnent'
const Content = () => {
  return (
    <>
      <div id='maincontent'>
        <div id='locationinput'>
          <h1>Easy Way to Find a Perfect Property</h1>
          <p>Search any Property in any loaction</p>
          <div id='search_box'>
          <input type="text" id="textinput" placeholder='Enter a valid location' />
          <input type="button" id='button' value="Submit"/>
          </div>
        </div>
        <div id="centerfirst"><Cityproperty/></div>
        
        <div id="centersecond">
          <h1>PROPERTIES FOR RENT</h1>
          <button id="button">View More</button>
          <div id='cardgrid'>
            <Cardcompnent background="url(/temp.svg)" price="$500" text="temp text" />
            <Cardcompnent background="blue" price="$240" text="temp t"/>
            <Cardcompnent background="green" price="$550" text="temp tqext"/>
            <Cardcompnent background="purple" price="$230" text="temp teefsxt"/>
            <Cardcompnent background="black" price="$520" text="temp t"/>
            <Cardcompnent background="magenta" price="$230" text="tempfesftext"/>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Content