myApp.controller('singleLesson', function($scope,$http, dataService){

	$scope.lessons = {};

	dataService.get('lesson')
		.success(function(data){
			$scope.lessons = data;
		})
		.error(function(data){
			console.log(data);
		});	
	
	$scope.submitLesson = function(appData, model){
		dataService.store(appData, model)
			.success(function(data){
				dataService.get('lesson')
					.success(function(Data){
						console.log(Data)
						$scope.lessons = Data;
					});
			})
			.error(function(data){
				console.log(data);
			});
	};
	
	$scope.deleteLesson =  function(id){
		dataService.destroy(id, 'lesson')
			.success(function(id){
				dataService.get('lesson')
					.success(function(Data){
						$scope.lessons = Data;
					});	
			})
			.error(function(data){
				console.log(data);
			});
	};

})