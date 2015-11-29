    // create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var robinModule = angular.module('robinModule', []);

// use the myAppModule variable to
// configure the module with a controller
robinModule.controller('createDemoCtrl', function ($scope) {
       // controller code would go here
        $scope.someData = [
           { type: '1',name: '�ڲ��',description:'��ʵ'},
           { type: '3',name: '����',description:'����'},
           { type: '2',name: '�в��',description:'����'}
           ];
    }
);

// use the myAppModule variable to
// configure the module with a filter
robinModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });