// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var queryModule = angular.module('queryModule', []);

// use the myAppModule variable to
// configure the module with a controller
queryModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
	   var listData = {
            salelist: '���۶���',
            listtype: '��������',
            listdate: new Date(2015, 10, 20),
            commitdate:new Date(2015,10,20),
            listID:'�������',
            liststate:'����״̬',
            remarks:'��ע'
        };
        $scope.data = listData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
queryModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
