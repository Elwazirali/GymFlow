app.config(function ($stateProvider) {
    $stateProvider.state('todo',{
      url:'/todo',
      templateUrl: 'pages/profile/profile.tpl.html',
      controller:'profileCtrl as controller'
    });
});
