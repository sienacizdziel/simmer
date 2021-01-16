import React from "react";
import "./Home.css";

export default function Home() {
  return (
  <>
    <div id="charts">
      <h1>Top Charts</h1>
      <div>
        <table className="user-chart">
          <tr className="header">
            <td>Cook</td>
            <td>Recipes Completed</td>
          </tr>
          <tr>
            <td>iluvchocolate42</td>
            <td>3001</td>
          </tr>
          <tr>
            <td>applesauce</td>
            <td>324</td>
          </tr>
          <tr>
            <td>billy joel</td>
            <td>5</td>
          </tr>
        </table>
      </div>
      <div className="winner-container">
        <button className="user winner">user profile</button>
        <button className="user winner">food image</button>
      </div>
      <div>
        <table className="food-chart">
          <tr className="header">
            <td>Recipe</td>
            <td># of Times Made</td>
          </tr>
          <tr>
            <td>double choco chip cookies</td>
            <td>50000</td>
          </tr>
          <tr>
            <td>margherita pizza</td>
            <td>2500</td>
          </tr>
          <tr>
            <td>pad thai</td>
            <td>100</td>
          </tr>
        </table>
      </div>
    </div>

    <div id="social">
      <h1>Social</h1>
      <h2>see what your friends are cooking!</h2>
      <div>
        <button className="user friends">friend profile</button>
        <h2>caesar salad</h2>
      </div>

    </div>
  </>
  );
}