angular.module("app", [])

.controller("MainCtrl", ["CalendarStore", function (CalendarStore) {
    var vm = this;
    vm.tabs = [
        {
            title: "Single Instance",
            content: "single-instance.html"
        },
        {
            title: "Multiple Instances (2)",
            content: "multiple-instance-2.html"
        },
        {
            title: "Multiple Instances (3)",
            content: "multiple-instance-3.html"
        }
    ];

    vm.active = 0;

    vm.changeTab = function (e, i) {
        e.preventDefault();
        vm.active = i;
    }

    vm.demoInstance1 = CalendarStore.createInstance("demo1", new Date(), new Date("2016-04-14"));
    vm.demoInstance2 = CalendarStore.createInstance("demo2", new Date("2016-01-01"), new Date("2016-01-26"));
    vm.demoInstance3 = CalendarStore.createInstance("demo3", new Date("2008-07-01"), new Date("2008-07-28"), [1]);
    vm.demoInstance4 = CalendarStore.createInstance("demo4", new Date("1947-08-01"), new Date("1947-08-15"), [-1, 1]);
}]);