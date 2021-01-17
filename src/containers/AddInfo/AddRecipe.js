import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddRecipe.css";
import Firebase from "firebase";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipelist: [],
    };
  }
  componentDidMount() {
    this.getUserData();
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database().ref("Recipes").set(this.state);
    console.log("DATA SAVED");
  };
  getUserData = () => {
    let ref = Firebase.database().ref("Recipes");
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let my_name = this.refs.my_name.value;
    let recipe_name = this.refs.recipe_name.value;
    let ingredient1 = this.refs.ingredient1.value;
    let cuisine = this.refs.cuisine.value;
    let uid = this.refs.uid.value;

    Firebase.database().ref('Recipes/' + my_name).set({
        my_name: my_name,
        recipe_name: recipe_name,
        cuisine: cuisine,
        ingredient1: ingredient1
      });



    if (uid && my_name && recipe_name && ingredient1 && cuisine) {
      const { recipelist } = this.state;
      const devIndex = recipelist.findIndex((data) => {
        return data.uid === uid;
      });
      recipelist[devIndex].my_name = my_name;
      recipelist[devIndex].recipe_name = recipe_name;
      recipelist[devIndex].ingredient1 = ingredient1;
      recipelist[devIndex].cuisine= cuisine;
      this.setState({ recipelist });
    } else if (my_name && recipe_name && ingredient1 && cuisine) {
      const uid = new Date().getTime().toString();
      const { recipelist } = this.state;
      recipelist.push({ uid, my_name, recipe_name, ingredient1, cuisine });
      this.setState({ recipelist });
    }
    this.refs.my_name.value = "";
    this.refs.recipe_name.value = "";
    this.refs.ingredient1.value = "";
    this.refs.cuisine.value = "";
    this.refs.uid.value = "";
  };


  render() {
    const { recipelist } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {recipelist.map((developer) => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  {/* <div className="card-body">
                    <h2 >Your Recipe</h2> */}
                    {/* <h5 className="card-title">{developer.my_name}</h5>
                    <h5 className="card-title">{developer.recipe_name}</h5>
                    <p className="card-text">{developer.ingredient1}</p>
                    <p className="card-text">{developer.cuisine}</p>
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          <div id="menu">∂
          <div className="row">
            <div className="col-xl-12">
              <h1>My Recipe</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>My Name</label>
                    <input
                      type="text"
                      ref="my_name"
                      className="form-control"
                      placeholder="My Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Recipe Name</label>
                    <input
                      type="text"
                      ref="recipe_name"
                      className="form-control"
                      placeholder="Recipe Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Ingredient</label>
                    <input
                      type="text"
                      ref="ingredient1"
                      className="form-control"
                      placeholder="Ingredient"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Cuisine</label>
                    <input
                      type="text"
                      ref="cuisine"
                      className="form-control"
                      placeholder="Cuisine"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Recipe
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
