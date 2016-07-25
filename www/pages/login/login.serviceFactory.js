/**
 * Created by Ali on 2016-07-20.
 */
app.factory('AddUser',function(){
  return{
    createUser:createUser
  };



  function createUser(){
    var ref = new Firebase("https://gymflow-d2401.firebaseio.com/users");
    /*ref.createUser({
      email    : "elwazirali@gmail.com",
      password : "correcthorsebatterystaple"
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });*/

    firebase.auth().createUserWithEmailAndPassword("elwazirali@gmail.com", "777711855mom").catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  }

});
