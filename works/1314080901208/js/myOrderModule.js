
//���������ʵ��
      var orderData = {
          orderId: 1,
          storage: 'myStorage',
          people: "peopleName",
          dateTime: new Date(2015, 10, 20),
          status: 'theStatus',
          notes:"theNotes"
      };
     



//
var myOrderModule = angular.module("OrderModule", []);
myOrderModule.controller("CreateOrderInformation", function ($scope) {
    
   
    var orderData1 = orderData;
    orderData1.orderId = 1;
    orderData1.storage = "storage1";
    orderData1.people = "simple";
    $scope.theOrderDatas = [orderData1];
});
myOrderModule.filter("", function () {
    

});



//��������js�ļ��Ƿ�ɹ��ĺ�������
function a() { alert("����js�ļ��ɹ�");}