angular.module("app").controller('FriendController',
function($scope, $http){
  $http.get('friend-data.json')
     .then(function(res){
        $scope.friends = res.data;
      });

});
