angular.module('clientApp', [])
  .controller('mainController', function($scope, $http) {
    $scope.hello = " Hello Microservice Client !";


    $scope.dosomething = function() {


      $http({
        method: 'GET',
        url: 'http://localhost:8000/api/dosomething/'
      }).then(function successCallback(response) {
        console.log(response.data.message);
        // this callback will be called asynchronously
        // when the response is available
        $scope.response = response.data.message;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.responseError = " An error occured ";
      });

    }
  });
