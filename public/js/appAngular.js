var app = angular.module("appBlog", ['ngRoute', 'ngTagsInput']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'login.html',
		controller: 'LoginController'
	})
	.when('/blog', {
		templateUrl: 'blog.html',
		controller: 'postController'
	})
	.otherwise({ redirectTo: '/' });
	
});



app.directive('postInfo', function() {
    return {
     restrict : 'E',
       scope:{
       	p: '=post'
      },
     templateUrl : "templates/postResume.html"
    };
});

app.directive('tagCloud', function() {
    return {
     restrict : 'E',
       scope:{
       	tags: '=tags'
      },
     templateUrl : "templates/tagResume.html"
    };
});




app.controller('postController', ['$scope', function ($scope) {
	

	$scope.postsList = [];
	$scope.cloudTags = [];


	 $scope.loadTags = function(query) {
	 	console.log(query);
	 	// var i = 0;
    	return $scope.cloudTags;
  	};
	
	$scope.addPost = function(){
		var post = {
			title: $scope.post.titulo,
			contenido: $scope.post.contenido,
			tags: $scope.tags,
			fecha: new Date()
		};
		//$scope.tagsList.concat(post.tagsList);
		$scope.postsList.push(post);
		$scope.post.titulo = "";
		$scope.post.contenido = "";
		$scope.post.tags = "";
		var i = 0;
		while(i < $scope.tags.length)
		{
			$scope.cloudTags.push($scope.tags[i]);
			i++;
		}
		console.log($scope.cloudTags);
		$scope.tags = [];
	};	


}]);


app.controller('LoginController', ['$scope', '$location', function ($scope, $location) {
	
	$scope.loginError = "";
	$scope.loginUser = function(){
		var user = $scope.email;
		var password = $scope.password;
		if (user == "oscar@oktana.io" && password == "oscar"){
			$location.path("/blog");
		}
		else{
			$scope.loginError = "Invalid user/pass.";
		}
	};
	


}]);




