var app = angular.module('pyramidApp', []);
app.controller('pyramidCtrl', function ($scope) {

	var totalNumberofRows = 5;
	$scope.pyramid= function () {

    
    for (var i = 1; i <= totalNumberofRows; i++) {
    	
        for (var j = 1; j <= i; j++) {

            
            console.log(j);
        }
        console.log("\n");
    }
}
    $scope.pyramid();
    console.log(j)
});
