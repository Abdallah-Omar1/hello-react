import React, { useContext, useEffect } from 'react'
import './Home.css'
import { useState } from 'react'


const Home = () => {
    const [startMessage,setStartMessage]=useState('')
    return ( 
       <div className='container'>
        <div className='btn_group'>
            <button className='btn' onClick={(e) => setStartMessage('Hello React') } >start</button>
            <button className='btn end_btn' onClick={(e) => setStartMessage('') } >end</button>
        </div>
        <h2 className='message'>{startMessage}</h2>
       </div>
    )
}

export default Home
