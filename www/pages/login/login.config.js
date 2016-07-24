/**
 * Created by Ali on 2016-07-20.
 */

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'pages/login/login.tpl.html',
      controller: ''
    });
  $urlRouterProvider.otherwise('/list');
});
