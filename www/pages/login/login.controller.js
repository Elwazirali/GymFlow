/**
 * Created by Ali on 2016-07-20.
 */

app.controller('LoginCtrl',function(userAuth,$rootScope,$state){
    var vm = this;

  $rootScope.$on('$stateChangeStart', function(event) {
    if(firebase.auth().currentUser){
      console.log(firebase.auth().currentUser);
    }else{
      event.preventDefault();
      alert('user not logged in');
    }
  });

    vm.login = function(){
      userAuth.signInUser(vm);
    };

    vm.auth = function(){
      userAuth.createUser();
    };
});
