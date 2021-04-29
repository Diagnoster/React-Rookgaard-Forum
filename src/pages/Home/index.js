import React, { Component } from 'react';
import bossmunster from '../../images/bossmunster.gif';
import bosssheng from '../../images/bosssheng.gif';
import citizen from '../../images/citizen.gif';
import { Link } from "react-router-dom"


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
                    <Link to="/munster" className="title">Munster frequency and loot static</Link>
                    <p className="description">Analyze the graph and statistics of the most wanted rookgaard mouse...</p>
                </div>
            </div>

            <div className="box">
                <div className="icon-container">
                    <img src={bosssheng} className="gif-munster" alt="munster gif" />
                </div>
                <div className="container">
                    <Link to="/sheng" className="title">Apprentice Sheng frequency and loot static</Link>
                    <p className="description">Analyze the graph and statistics of the most feared wizard in the rookgaard...</p>
                </div>
            </div>

            <div className="box">
                <div className="icon-container">
                    <img src={citizen} className="gif-citizen" alt="citizen gif" />
                </div>
                <div className="container">
                    <Link to="/citizen" className="title">How to make your addon complete</Link>
                    <p className="description">Best routes to assemble your first outfit</p>
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
