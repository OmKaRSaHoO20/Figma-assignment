import React from 'react';
import "./Form.css"
import FormBack from './Formback.jpeg';
import FormPic from './Formpic.jpeg';

export default function Form(){
    return <>
        <div className='Form'>
            <div className='Form-left'>
            <p id='line'></p>
            <h3>
                Let’s Buid Something <br/> AWESOME !
            </h3>
            <p>
            One of the Tech Experts will reach out to you within next <br/> 48 business hours.
            </p>
            <div className='form-flex'>

                <div>
                <img src={FormPic} id='leftimg' alt='img'></img>
            <h3>
                Follow us on
            </h3>
            <div className='icons'>
                <p><a href='#'><i class="fa-brands fa-facebook"></i></a></p>
                <p><a href='#'><i class="fa-brands fa-instagram"></i></a></p>
                <p><a href='#'><i class="fa-brands fa-twitter"></i></a></p>
            </div>

            </div>

                <div className='gridform'>
                    {/* <img src={FormBack} alt='img' id='rightimg'></img> */}
                    <h3>Drop us a message</h3>
                    <p>We would love to hear everything from you</p>

                    <form>
                        <p>Name</p>
                        <input placeholder='John Doe' style={{width: "80%"}}/>
                        <p>E-mail</p>
                        <input placeholder='example@gmail.com' style={{width: "80%"}}/>
                        <p>Contact</p>
                        <input style={{width: "80%"}}/>
                        <p>Subject</p>
                        <input style={{width: "80%"}}/>
                        <p>Description</p>
                        <textarea rows={9} cols={65}></textarea>

                    </form>
                        <button type='submit'>Submit</button>
                </div>
            </div>
            </div>
        </div>
    </>
}