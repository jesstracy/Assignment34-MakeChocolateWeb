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
//                            $scope.mySolutionBigsAdapted = 0;
//                            $scope.mySolutionSmallsAdapted = 0;
                        } else {
                            $scope.showNoSolution = false;
//                            $scope.mySolutionBigsAdapted = $scope.mySolution.bigs;
//                            $scope.mySolutionSmallsAdapted = $scope.mySolution.smalls;
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

//        $scope.animate = function() {
//            console.log("animate is running!");
//            if ($scope.inputNumBigs )
//        }

        $scope.factoryName = "**The Chocolate Factory**";
        $scope.showNoSolution = false;
//        $scope.showInventory = true;
        console.log("ng controller initialized!");

//        $scope.inputNumBigs = 1;
//        $timeout($scope.testTimeout, 1000);



    });