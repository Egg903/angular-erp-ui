// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var queryModule = angular.module('queryModule', []);

// use the myAppModule variable to
// configure the module with a controller
queryModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
	   var listData = {
            saleList: '销售订单',
            listType: '订单类型',
            listDate: new Date(2015, 10, 20),
            commitDate:new Date(2015,10,20),
            listID:'订单编号',
            listState:'订单状态',
            remarks:'备注'
        };
        $scope.data = listData;
		$scope.isHidden = true;
		$scope.show = function(){
			$scope.isHidden = !$scope.isHidden;
			}
    }
);

// use the myAppModule variable to
// configure the module with a filter
queryModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
