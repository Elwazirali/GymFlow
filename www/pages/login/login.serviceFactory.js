/**
 * Created by Ali on 2016-07-20.
 */
app.factory('AddUser',function(){
  return{
    createUser:createUser
  };



  function createUser(){

    firebase.auth().createUserWithEmailAndPassword("saadsrahimi@gmail.com", "asdfasdfasdf").catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  }

});
