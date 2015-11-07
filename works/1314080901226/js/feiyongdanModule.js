// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var feiyongdanModule = angular.module('feiyongdanModule', []);

// use the myAppModule variable to
// configure the module with a controller
feiyongdanModule.controller('MyFilterDemoCtrl', function ($scope) {
           var someData = {
            leibie:'�������',
            danwei:'���˵�λ',
            ren:'������',
            baozhangjine:'���˽��',
            shifujijine:'ʵ�����',
            riqi:'��������',
            zhuangtai:'״̬',
            beizhu:'��ע',
            dateJoined: new Date(2015, 10, 25),
        };
        $scope.data = someData;
       
    }
);

// use the myAppModule variable to
// configure the module with a filter
feiyongdanModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
