(function(){
	var addHeroController=function($scope,mainService){
		$scope.addHero=function(){
			var Entry=mainService.getResource();
			Entry.save($scope.hero,function(){
				console.log("hero saved")
				history.go(-1);
			})
			
		}
		$scope.prevPage=function(){
			history.go(-1);
		}
	};
	angular.module("app").controller("addHeroController",addHeroController);
})();