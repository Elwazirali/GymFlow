app.config(function ($stateProvider) {
    $stateProvider.state('profile',{
      url:'/profile',
      parent:'menu',
      controller:'profileCtrl as controller',
      views: {
        'menuContent' :{
          templateUrl: 'pages/profile/profile.tpl.html'
        }
      }
    });
});
