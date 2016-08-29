/**
 * Created by Saad on 2016-07-24.
 */
app.controller('ListCtrl', function ($ionicModal,Items) {
    console.log(Items);
    var vm = this;
    vm.items = Items.listItems();
    console.log(vm.items);
    vm.addItem = function () {
        var name = prompt("What do you need to buy?");
        if (name) {
            vm.items.$add({
                "name": name
            });
        }
    };
    vm.removeItem = function (index) {
        vm.items.$remove(index);
    };


    vm.days = Items.days();

  vm.newDay = function(){
    var bodyPart = prompt("What are you training today?");
    var time = new Date().getTime();
    if(bodyPart){
      vm.days.$add({

        "bodyPart": bodyPart,
        "time": time

      })
    }
  };

  vm.endDay = function(){
    var diffMs =  new Date().getTime() - vm.days[vm.days.length-1].time;
    vm.timeInGym = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  }

});
