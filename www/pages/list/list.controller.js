/**
 * Created by Saad on 2016-07-24.
 */
app.controller('ListCtrl', function ($ionicModal,Items) {
    console.log(Items);
    var vm = this;
    vm.items = Items;
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
    }
});
