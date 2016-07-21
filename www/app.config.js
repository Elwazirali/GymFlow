app.config(function (localStorageServiceProvider,$urlRouterProvider,$stateProvider) {
    localStorageServiceProvider
      .setPrefix('GymFlow');

    $stateProvider.state('home',{
      url:'/home',
      template: '<h1>My Contacts</h1>',
      controller:'appCtrl as vm'
    });
});
