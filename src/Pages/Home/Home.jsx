import React from 'react';
import "./Home.css";
import CervialFractureImage from "./img.png";

function Home() {
  return (
    <>
    <div>Home</div>
    <div className="card">
        <div className="circle"></div>
        <div className="content">
           <h2>Cervical Fracture Detection</h2>
           <p>Loren ipsum akjdfasldkfja sdflkajsd flakdsfa;sdkflaja;sdlkf a;sdlkfja s;dflkja ds;fjk 
            lakdjfa</p>
            <a href="#">Test Now</a>
        </div>
        <img src={CervialFractureImage} alt="image" />
    </div>
    </>
  )
}

export default Home;