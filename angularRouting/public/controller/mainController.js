var myApp = angular.module("myApp");
myApp.controller("myController",["$scope",cntFunction]);

function cntFunction($scope){
	alert("In controller");
}