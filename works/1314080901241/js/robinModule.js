// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('robinModule', []);

// use the myAppModule variable to
// configure the module with a controller
robinModule.controller('createDemoCtrl', function ($scope) {
       // controller code would go here

  	  
  	      var DataList = {
  	          classification: '���',
  	          name: '����',
   	          description:'����',
    		  };
       	 $scope.data = DataList;
		} 
	
    }
);

// use the myAppModule variable to
// configure the module with a filter
robinModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });