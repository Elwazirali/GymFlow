/*
 * Created by Saad on 2016-07-31.
 */

app.factory('NewUser', function () {
    return {
        create:create
    }

    var create = function (credentials) {
        var email = credentials.newEmail;
        var password = credentials.newPass;

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
});