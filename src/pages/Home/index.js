import React, { Component } from 'react';
import munster from '../../images/munster.png';
import bossmunster from '../../images/bossmunster.gif';
import './home.css';

export default function Home() {
    return (
        <div className="posts">

            <h1>You may like</h1>

            <div className="box">
                <div className="icon-container">
                    <img src={bossmunster} className="gif-munster" alt="munster gif" />
                </div>
                <div className="container">
                    <h3 className="title">Munster frequency and loot static</h3>
                    <p className="description">Analyze the graph and statistics of the most wanted rookgaard mouse...</p>
                </div>
            </div>


        </div>
    );
}

/*
            <div className="box">
                <h2 className="title">Munster frequency</h2>
                <img src={munster} className="munster" alt="boss munster" />
            </div>

*/
