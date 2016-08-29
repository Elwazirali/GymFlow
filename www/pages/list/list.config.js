/**
 * Created by Ali on 2016-07-24.
 */
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('list', {
      parent:'menu',
      url: '/list',
      views: {
        'menuContent' :{
          templateUrl: 'pages/list/list.tpl.html'
        }
      },
      controller: ''
    });
});
