// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var feiyongdanModule = angular.module('feiyongdanModule', []);

// use the myAppModule variable to
// configure the module with a controller
feiyongdanModule.controller('feiyongdanCtrl', function ($scope) {
           $scope.someData = [
         { number: '01',abstract: 'ˮ��',payment:'50000',remark:'֧��ˮ��', description:'balabala'},
         { number: '02',abstract: '���',payment:'70000',remark:'֧�����', description:'balabala'},
         { number: '03',abstract: 'нˮ',payment:'4000',remark:'֧��Ա��нˮ', description:'balabala'}
];

// use the myAppModule variable to
// configure the module with a filter
feiyongdanModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
