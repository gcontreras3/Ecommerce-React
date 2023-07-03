import React from "react";
import './Home.css'
// import Slider from './Slider'


export default function Home () {
    return (
        <>
        <div className="title">
            <div className="new-arr">
                <h2> New Arrivals</h2>
                <p>This is the home page store front view.</p>
                <button className="btn-men">Shop Men's</button>
                <button className="btn-wmen">Shop Women's</button>
            </div>
            {/* <Slider/> */}
        </div>
        </>
    )
}