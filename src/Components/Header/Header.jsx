import React from 'react';
import Logo from "./new.jpeg";
import Up from "./right.jpeg";
import "./Header.css";

export default function Header(){
    return<>
        <div className='Header'>
            <div className='First'>
                <div className='Left-up'>
                    <img src={Logo} width="100px" alt='logo'/>
                    <h2>infenito</h2>
                </div>

                <div className='Left-mid'>
                    <p>Welcome to Infenito</p>
                    <h1>
                        We power <br/>
                        brands to build <br/>
                        big!
                    </h1>
                    <div className='flex'>
                        <button type='submit'>Join</button>
                        <button type='submit'>Contact</button>
                    </div>
                </div>
            </div>

            <div className='second'>
                <div className='Nav'>
                    <a href='#'>Home</a>
                    <a href='#'>About us</a>
                    <a href='#'>Portfolio</a>
                    <a href='#'>Pricing</a>
                </div>

                <img src={Up} id="head-img" alt="img"/>
                

            </div>
        </div>
        <script src="https://kit.fontawesome.com/c18afc09d1.js" crossorigin="anonymous"></script>
    </>
}