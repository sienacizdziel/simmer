import React from "react";
import "./Home.css";
import firebase from './backend/Firebase';

class App extends React.Component {
  constructor(props) {
      
      super(props);
     
      this.state = {recipelist : []}
      }
      
    componentDidMount() {
     
     
       
        firebase.database().ref("Recipes").on("value", snapshot => {
          let recipelist = [];
          snapshot.forEach(snap => {
              // snap.val() is the dictionary with all your keys/values from the 'students-list' path
              recipelist.push(snap.val());
          });
          this.setState({ recipelist: recipelist });
        });
      
      
   }
    
    render(){
      return (      
            <>
        <div className="MainDiv">
        <div class="jumbotron text-center bg-sky">
            <h3>Recipes</h3>
        </div>
      
        <div className="container">
            <table id="example" class="display table">
              <thead class="thead-dark">
                  <tr>
                      <th>Recipe Name</th>
                      <th>Ingredient 1</th>
                      <th>Cuisine</th>
                  </tr>
              </thead>
              <tbody>
              {this.state.recipelist.map(data => {
                  return (
                      <tr>     
                      <td>{data.recipe_name}</td>
                      <td>{data.cuisine}</td>
                      <td>{data.ingredient1}</td>
                      </tr>
                  );
                  })}         
              </tbody>
              
           </table>
       </div>
       <div class="jumbotron text-center bg-sky">
            <h3>Friend List</h3>
        </div>

       <div className="container">
            <table id="example" class="display table">
              <thead class="thead-dark">
                  <tr>
                      <th>Friend</th>
                      <th>Favorite Cuisine</th>
                      <th>Cooking Tonight</th>
                  </tr>
              </thead>
              <tbody>
              {this.state.recipelist.map(data => {
                  
                  return (
                      <tr>     
                      <td>{data.friendname}</td>
                      <td>{data.cuisine}</td>
                      <td>{data.cookingtonight}</td>
                      </tr>
                      
                  );
                 
                  })}         
              </tbody>
              
           </table>
       </div>

      </div>

      
          
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
  }

  export default App;



