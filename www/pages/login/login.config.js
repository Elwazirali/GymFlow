/**
 * Created by Ali on 2016-07-20.
 */

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      parent:'menu',
      controller: '',
      views: {
        'menuContent' :{
          templateUrl: 'pages/login/login.tpl.html',
        }
      }
    });
  $urlRouterProvider.otherwise('/login');
});
