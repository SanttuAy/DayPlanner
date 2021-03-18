import React, { useState } from 'react';
import background1 from "./../happygirl.jpg";
import background2 from "./../nuolitapetti.jpg";
import background3 from "./../winterforest.jpg";

const BackgroundSelection = () => {
  const [backgrounds, setBackgrounds] = useState([
    background1, 
    background2,  
    background3
  ])

//Tämä ei vielä toimi, kaikki voi valita
  return(
      <div>
        <input type="radio" value="happyGirl" name="" /> happy girl
        <input type="radio" value="arrowWallpaper" name="" /> arrow wallpaper
        <input type="radio" value="winterForest" name="" /> winter forest
      </div>
    )
}

export default BackgroundSelection