var myApp = angular.module("myApp",["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"templates/home.html"
	})
	.when("/main",{
		templateUrl:"templates/main.html"
	})
	.when("/last",{
		templateUrl:"templates/last.html",
		controller:"myController"
	})
})