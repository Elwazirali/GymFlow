app.controller('appCtrl', function ($scope, $ionicModal, localStorageService) {
  var vm = this;
  vm.signout = function(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  };
});
