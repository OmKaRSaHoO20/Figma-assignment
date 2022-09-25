import React from "react";
import "./Footer.css";

export default function Footer(){
    return <>
        <div className="Footer-Container">
            <div className="foot">
                <h3>Company</h3>
                    <a href="#">About us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact</a>
                    <a href="#">Portfolio</a>
            </div>
            <div className="foot">
                <h3>Contact</h3>
                    <a href="#">Quote</a>
                    <a href="#">infenito@gmail.com</a>
                    <a href="#">9843753330</a>
            </div>
            <div className="foot svg">
                <h3>More</h3>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">LinkedIn</a>
            </div>

            <svg width="286" height="382" viewBox="0 105 286 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="191.414" cy="191" r="159" stroke="white" stroke-width="64"/>
            </svg>


        </div>
    </>
}