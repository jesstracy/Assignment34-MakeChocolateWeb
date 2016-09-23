angular.module('MakeChocolateAngularApp', [])
   .controller('SampleController', function($scope, $http, $timeout) {

        $scope.makeArray = function(arraySize) {
            var returnArray = [];
            for (var i = 0; i < arraySize; i++) {
                returnArray.push(i);
            }
            return returnArray;
        }


        $scope.getNumSmallsAndBigs = function(numBig, numSmall, goal) {
            console.log("In getNumSmallsAndBigs function in ng controller");

            $http.get("/getSolution.json?numBig=" + numBig + "&numSmall=" + numSmall + "&goal=" + goal)
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.mySolution = response.data;
                        if ($scope.mySolution.hasSolution == false) {
                            $scope.showNoSolution = true;
                        } else {
                            $scope.showNoSolution = false;
//                            for (var counter = 1; counter < $scope.mySolution.bigs; counter++) {
//                                $scope.inputNumBigs = $scope.inputNumBigs - counter;
//                                if (counter < $scope.mySolution.smalls) {
//                                    $scope.inputNumSmalls = $scope.inputNumSmalls - counter;
//                                }
//                                $timeout(animate(), 800);
//                            }
                            $scope.inputNumBigs = $scope.inputNumBigs - $scope.mySolution.bigs;
                            $scope.inputNumSmalls = $scope.inputNumSmalls - $scope.mySolution.smalls;

                        }
                    },
                    function errorCallback(response) {
                        console.log("Unable to get data");
                    });
        }

//        $scope.testTimeout = function() {
//            console.log("testTimeout is running");
//            if ($scope.inputNumBigs > 5) {
//                return;
//            } else {
//                $scope.inputNumBigs += 1;
//                $timeout($scope.testTimeout, 1000);
//            }
//        }

//        var animate = function() {
//            console.log("animate is running!");
//        }

        $scope.factoryName = "**The Chocolate Factory**";
        $scope.showNoSolution = false;
//        $scope.showInventory = true;
        console.log("ng controller initialized!");

//        $scope.inputNumBigs = 1;
//        $timeout($scope.testTimeout, 1000);



    });