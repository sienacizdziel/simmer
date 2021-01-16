// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    if (user != null) {
      document.getElementById("user_para").innerHTML =
        "Welcome user:" + email.id;
    }
  } else {
  }
});
function submit() {
  var recipe_name = document.getElementById("recipe_field").value;
  var ingredient_1 = document.getElementById("ingredient_1_field").value;
//   window.alert("recipe name is " + recipe_name);
//   window.alert("ingredient 1 is" + ingredient_1);
//   firebase
//     .auth()
//     // .createUserWithEmailAndPassword(userEmail, userPass)
//     .catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ...
//       windows.alert("error: " + errorMessage);
//     });

  window.alert("recipe name is " + recipe_name);
  window.alert("ingredient 1 is" + ingredient_1);
  db.collection("Recipes")
    .doc(recipe_name)
    .set({
      ingredient_1: ingredient_1
    })
    .then(function () {
      console.log("added in recipe name and ingredient");
    })
    .catch(function (error) {
      console.log("got an error", error);
    });
    window.location.replace("index.html");

}