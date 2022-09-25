import React from 'react';
import Appl from './Application.jpeg';
import Tree from './Tree.jpeg';
import AI from './AI.jpeg';
import Blockchain from "./blockchain.png";
import Gaming from "./Gaming.png";
import code from './code.png';
import DB from './DB.png';
import "./SecondSec.css";

export default function SecondSec(){
    return<>
        <div className='Second-Container'>

            <p id='line'></p>
            <h3>See popular tags <br/>
            and browse differnt topics</h3>

        <div className='flexcontainer'>        
        
        <div className='Left-2nd'>
        <img src={Tree} width='80%' alt='app' style={{marginTop : "70px"}}></img>
        </div>
        <div className='Right-2nd'>
            <div className='gridblocks'>
                <img src={Appl} width='100px' alt='app'></img>
                <p id='col1'></p>
                <h3>Application stacks</h3>

                <p>
                We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.
                </p>
            </div>
            <div className='gridblocks'>
                <img src={code} width='100px' alt='app'></img>
                <p id='col2'></p>
                <h3>Website Stacks</h3>

                <p>
                Get extensively researched website and web app development services using the latest technologies like MEAN, MERN, Laravel, BootStrap, and much more.
                </p>
            </div>
            <div className='gridblocks'>
                <img src={DB} width='100px' id='db' alt='app'></img>
                <p id='col3'></p>
                <h3>Database Stacks</h3>

                <p>
                We have a set of technologies and services that organizations use to store, manage, and access data.
                </p>
            </div>
            <div className='gridblocks'>
                <img src={AI} width='100px' alt='app'></img>
                <p id='col4'></p>
                <h3>AI/ML Stacks</h3>

                <p>
                We provide features to larger organizations which have already started maturing their processes to create standardized ML pipelines that are optimized for scale, efficiency, and control.
                </p>
            </div>
            <div className='gridblocks'>
                <img src={Blockchain} width='100px' alt='app'></img>
                <p id='col5'></p>
                <h3>Blockchain</h3>

                <p>
                We use Blockstack, a project that utilizes blockchain technology to expand the functionalities of bitcoin by serving as a second layer protocol.
                </p>
            </div>
            <div className='gridblocks'>
                <img src={Gaming} width='100px' alt='app'></img>
                <p id='col6'></p>
                <h3>Gaming Stacks</h3>

                <p>
                Gaming services serve customers in gambling establishments, such as casinos or racetracks. Some workers tend slot machines or deal cards.
                </p>
            </div>
        </div>
        </div>
        </div>
    </>
}