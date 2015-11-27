(function(){
	var editHeroController=function($scope,$routeParams,mainService){
		$scope.id=$routeParams.id;
		var getData=mainService.getData;
		getData().then(function(res){
			$scope.heros=res.data;
			
			for(var i=0;i<$scope.heros.length;i++){
				if($scope.heros[i].id==$scope.id){
					$scope.hero=$scope.heros[i];
				}
			}
		})
		$scope.updateHero=function(){
			var Entry=mainService.getResource();
			Entry.update($scope.hero);
			history.go(-1);
		}
		$scope.prevPage=function(){
			history.go(-1);
		}
	};
	angular.module("app").controller("editHeroController",editHeroController);
})();