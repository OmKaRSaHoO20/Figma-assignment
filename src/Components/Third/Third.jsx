import React from 'react';
import "./Third.css";
import Bgimg from "./Bgimg.jpeg"

export default function Third(){
    return <>
        <div className='Third-container'>
        <p id='line1'></p>
        <h3>Services we provide</h3>
        <p>We serve the users in different categories with latest tools</p>
        <img src={Bgimg} alt='bg'/>
        </div>
    </>
}