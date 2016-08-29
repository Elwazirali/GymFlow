app.controller('appCtrl', function ($scope, $ionicModal, $state, $rootScope) {
  var vm = this;

  $rootScope.$on('$stateChangeStart', function(event,toState) {
    if(firebase.auth().currentUser){
      console.log(firebase.auth().currentUser);
    }
    else if(toState.name == 'signup' || toState.name =='login'){
      console.log('going to create a user page');
    }
    else{
      $state.go('login');
      event.preventDefault();
    }
  });
});
