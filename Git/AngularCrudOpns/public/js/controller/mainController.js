(function(){
	var mainController=function($scope,mainService,$window){
		var getData=mainService.getData;
		getData().then(function(res){
			$scope.heros=res.data;
		});
		$scope.deleteHero=function(id){
			var Entry=mainService.getResource();
			Entry.delete({id:id});
			$window.location.reload();
		}
	};
	angular.module("app").controller("mainController",mainController)
}());