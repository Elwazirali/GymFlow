/**
 * Created by Ali on 2016-07-20.
 */
app.factory('AddUser',function(){
  return{
    createUser:createUser
  };



  function createUser(){
    var email = prompt("Email:");
    var password = prompt("Password");

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  }
});
