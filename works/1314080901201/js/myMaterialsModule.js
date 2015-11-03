// javascript.js
// create a new module called 'myMaterialsModule' and save 
// a reference to it in a variable called myMaterialsModule 
var myMaterialsModule = angular.module('myMaterialsModule', []);

myMaterialsModule.controller('createmyMaterialsCtrl', function ($scope) {
        var someData = {
            number:100,
            date:'建档日期',
            sort:'供应商类别',
            name:'供应商全称',
            code:'拼音码',
            homepage:'供应商主页',
            jc:'供应商简称',
            area:'行政区域',
            synposis:'供应商简介',
            dateJoined: new Date(2015, 10, 20),
        };
        $scope.data = someData;
});
 myMaterialsModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
\ No newline at end of file
