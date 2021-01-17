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
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.refs.name.value;
    let ingredient = this.refs.ingredient.value;
    let cuisine = this.refs.cuisine.value;
    let uid = this.refs.uid.value;

    if (uid && name && ingredient && cuisine) {
      const { recipelist } = this.state;
      const devIndex = recipelist.findIndex((data) => {
        return data.uid === uid;
      });
      recipelist[devIndex].name = name;
      recipelist[devIndex].ingredient = ingredient;
      recipelist[devIndex].cuisine= cuisine;
      this.setState({ recipelist });
    } else if (name && ingredient && cuisine) {
      const uid = new Date().getTime().toString();
      const { recipelist } = this.state;
      recipelist.push({ uid, name, ingredient, cuisine });
      this.setState({ recipelist });
    }

    this.refs.name.value = "";
    this.refs.ingredient.value = "";
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
                  <div className="card-body">
                    <h5 className="card-title">{developer.name}</h5>
                    <p className="card-text">{developer.ingredient}</p>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="menu">
          <div className="row">
            <div className="col-xl-12">
              <h1>My Recipe</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Ingredient</label>
                    <input
                      type="text"
                      ref="ingredient"
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
        {/* <div id="wrap">
          <div id="recipe">
            <h1> Recipe Name </h1>
            <div>
              <button className="image">image</button>
            </div>
            <h2>Type</h2>
            <h2>Category</h2>
            <h2>Rating</h2>
          </div>
          <div id="menu">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control size="lg" type="name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Type</Form.Label>
                <Form.Control size="lg" type="name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control as="textarea" rows={6} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea2">
                <Form.Label>Directions</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Form>
            <button type="submit" className="btn btn-primary">
                  Add Recipe
            </button>
            <div id="submit">
              <Button type="submit" className="btn btn-primary"> Submit Recipe</Button>
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default App;
