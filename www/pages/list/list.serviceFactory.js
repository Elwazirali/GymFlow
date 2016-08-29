/**
 * Created by Ali on 2016-07-24.
 */
app.factory('Items',function($firebaseArray){

    return{
      listItems: listItems,
      days: days
    };


    function listItems(){
      var itemsRef = new Firebase("https://gymflow-d2401.firebaseio.com/items");
      return $firebaseArray(itemsRef);
    }

    function days(){
      var days = new Firebase("https://gymflow-d2401.firebaseio.com/days");
      return $firebaseArray(days);
    }

});
