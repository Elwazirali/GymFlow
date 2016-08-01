/**
 * Created by Ali on 2016-07-20.
 */
app.factory('userAuth',function($state){

  return{
    createUser:createUser,
    signInUser:signInUser
  };


  function signInUser(userData){


    firebase.auth().signInWithEmailAndPassword(userData.userEmail, userData.userPassword).then(function(success,error) {
      // Handle Errors here.
    if(error){
      console.log(error);
    }
    else{
      alert('logged in');
      $state.go('list');
    }


    }/*,function () {
        $state.go('list');
    }*/);
  }

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
