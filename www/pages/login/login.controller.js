/**
 * Created by Ali on 2016-07-20.
 */

app.controller('LoginCtrl',function(userAuth,$rootScope,$state){
    var vm = this;

    vm.login = function(){
      userAuth.signInUser(vm);
    };

    vm.auth = function(){
      userAuth.createUser();
    };
});
