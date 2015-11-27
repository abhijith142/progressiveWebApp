(function(){
	var mainService=function($http,$resource){
		this.getData=function(){
			return $http.get("/getData");
		}
		this.getResource=function(){
			return $resource("/getData/:id",{id:'@_id'},{
				update:{
					method:'PUT'
				}
			});
		}
	};
	angular.module("app").service("mainService",mainService);
}());