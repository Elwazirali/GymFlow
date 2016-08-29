/**
 * Created by Ali on 2016-08-01.
 */
app.controller('menuCtrl',function($state){
  var vm = this;

  vm.signout = function(){
    $state.go('login');
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  };

});
