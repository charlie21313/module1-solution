(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.listOfItems = "";
  $scope.totalItems = 0;
  $scope.message = "";

  function displayNumeric(listOfItems){
    var totalItemsValue = splitString($scope.listOfItems);
    $scope.totalItems = totalItemsValue;
    if ($scope.totalItems <= 0 || $scope.listOfItems == "") {
      return $scope.message = "Please enter data first";
    }
    else if ($scope.totalItems > 0 && $scope.totalItems < 4) {
      return $scope.message = "Enjoy !";
    }
    else if ($scope.totalItems >= 4){
      return $scope.message = "Too much !";
    }
  };

  $scope.checkClick = function () {
    $scope.button = displayNumeric($scope.message) ;
  };

  function splitString(stringToSplit) {
    var sep = ",";
    var arrayOfStrings = stringToSplit.split(sep);
    return arrayOfStrings.length;
  }

};

})();
