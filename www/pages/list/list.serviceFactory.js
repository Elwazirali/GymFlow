/**
 * Created by Ali on 2016-07-24.
 */
app.factory('Items',function($firebaseArray){
    var itemsRef = new Firebase("https://gymflow-d2401.firebaseio.com/items");
    return $firebaseArray(itemsRef);
});
