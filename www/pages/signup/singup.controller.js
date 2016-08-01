/*
 * Created by Saad on 2016-07-31.
 */

app.controller('signupCtrl', function (NewUser) {
    var vm = this;

    vm.create = function (vm) {
        if (vm.newPass === vm.confPass) {
            NewUser.create();
        }
        else {
            vm.error = "Passwords do not match";
        }
    }
});