import React from 'react'
import { useState } from 'react'
import Bored from './Bored.jpg'
import happy from './happy.jpg'
import "../index.css"


function Home() {
  let box;
    const [activity, setActivity] = useState('');
      fetch("https://www.boredapi.com/api/activity")
    .then(res => res.json())
    .then(act => box = act);

    const counter = () => {
      setActivity(box.activity)
    }

    let path = activity==='' ? Bored : happy ;
    let heading = activity==='' ? "Are you Bored ?" : "Do this"
    let button = activity==='' ? "Click me for fun" : "Still Bored- Click again"
   
  return (
    <div className='container'>
        <h1>{heading} {activity}</h1>
        <img src={path} alt="bored" height={'200px'} />
        <br />
        <button onClick={counter}>{button}</button>
    </div>
  )
}

export default Home