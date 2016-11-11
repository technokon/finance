/**
 * Created by iakoupov on 2016-11-10.
 */

var controllers = angular.module('financeAppControllers',[]);

controllers.controller('financeController',[

    function () {
        var vm = this;
        
        vm.cashFlows = [];
        
        vm.showNpv = false;

        vm.calculateNpv = function () {
            vm.npv = 0;
            vm.cashFlows.forEach(function (cashFlow, index) {

                vm.npv  = vm.npv + cashFlow / Math.pow(vm.rate+1, index+1);
                
            })
            
            vm.showNpv = true;
            
        }
        
        vm.clearNpv = function () {
            vm.cashFlows = [];
            delete vm.rate;
            delete vm.periods;
            delete vm.npv;
        }
        
        vm.npvLinkHandler = function () {
            vm.showNpvScreen = true;
        }

        vm.periodInputHandler = function () {
            vm.cashFlows.length = vm.periods;
        }
}]);
