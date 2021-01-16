import React from "react";
import "./Home.css";
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCjO5G0GcNPneTrBdracN1X6LSBDFAU7es",
  authDomain: "simmer-hackthenorth.firebaseapp.com",
  databaseURL: "https://simmer-hackthenorth-default-rtdb.firebaseio.com",
  projectId: "simmer-hackthenorth",
  storageBucket: "simmer-hackthenorth.appspot.com",
  messagingSenderId: "980809921947",
  appId: "1:980809921947:web:bfe55452134d18e0a39d3e",
  measurementId: "G-D0JRLHDVNQ"
};

firebase.initializeApp(config);
const database = firebase.database();
const ref = database.ref('recipes');


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
    <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>FirstName</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
            {this.state.studentslist.map(data => {
                return (
                    <tr>     
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>{data.mobileNumber}</td>
                    </tr>
                );
                })}
            </tbody>
         </table>
         </div>

      <h1>Social</h1>
      <h2>see what your friends are cooking!</h2>
      <div className="friend-container">
        <button className="user friends left">friend profile</button>
        <h2 className="friend-recipe">CAESAR SALAD</h2>
        <h3>michelle:)</h3>
      </div>
      <div className="friend-container">
        <button className="user friends right">friend profile</button>
        <h2 className="friend-recipe">HOT BUFFALO WINGS</h2>
        <h3>siena123</h3>
      </div>
      <div className="friend-container">
        <button className="user friends left">friend profile</button>
        <h2 className="friend-recipe">TACOS</h2>
        <h3>wooandywoo</h3>
      </div>
      <div className="friend-container">
        <button className="user friends right">friend profile</button>
        <h2 className="friend-recipe">RAMEN</h2>
        <h3>vyomesh!</h3>
      </div>
    </div>
  </>
  );
}