import React from "react";
import "./FindRecipe.css";

export default function FindRecipe() {
  return (
  <>
    <div className="searchbar">
         <input type="text" placeholder="Search for..." /><br></br>
     </div>
     <div className="label">
         <h2>Select one of today's popular meals!</h2>
     </div>
    <div className="images">
        <img id="leftimg" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
        <img id="middleimg" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
        <img id="rightimg" src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"/>
    </div>
  </>
  );
}