var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Add a Recipe</title>
          <link rel="stylesheet" href="style.css" />
          <div id="recipe_div" className="main-div">
            <h1>Add your Recipe</h1>
            <input type="text" placeholder="Recipe Name..." id="recipe_field" />
            <input type="text" placeholder="Ingredient #1..." id="ingredient_1_field" />
            <button onclick="submit()">Submit Recipe</button>
          </div>
        </div>
      );
    }
  });