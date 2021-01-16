// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function submit() {
  var recipe_name = document.getElementById("recipe_field").value;
  var ingredient_1 = document.getElementById("ingredient_1_field").value;
  var cuisine = document.getElementById("cuisine_field").value;
  window.alert("recipe name is " + recipe_name);
  window.alert("ingredient 1 is" + ingredient_1);
  window.alert("cuisine is" + cuisine);
  
  db.collection("Recipes")
    .doc(recipe_name)
    .set({
      recipeIngredient: ingredient_1,
      recipeCuisine: cuisine
    })
    .then(function () {
      console.log("added in recipe");
    })
    .catch(function (error) {
      console.log("got an error", error);
    });
    window.location.replace("test.html");

}

