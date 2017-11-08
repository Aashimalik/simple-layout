const app=angular.module('myapp',['ngRoute','ngMessages']);
app.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/',{
		templateUrl:'views/registration.html',
		controller:'Acontroller'
       
    });
    $routeProvider.when('/contactus',{
		templateUrl:'views/contactus.html',
		controller:'ContactUs'
        
	});
	$routeProvider.when('/aboutus',{
		templateUrl:'views/aboutus.html'
	});
	$routeProvider.otherwise({
		redirectTo:'views/404.html'
	})
$locationProvider.html5Mode(true);	
});
 
app.controller('Acontroller',function($scope){
	console.log("registration controller loaded");
$scope.submit=function(){
 alert('you are successfully registered');
 console.log($scope.body);
}
});

app.controller('ContactUs',function($scope){
	console.log('contact us controller loaded');
	$scope.submit=function(){
	alert('Deatils received ');
	console.log($scope.body);
	}
});