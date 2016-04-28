angular.module("app").component("calendar", {
    bindings: {
        instance: "=",
        adjacent: "@"
    },
    templateUrl: "components/calendar.template.html",
    controller: ["CalendarStore", function (CalendarStore) {
        var vm = this;

        vm.goTo = function (type, value) {
            CalendarStore.goTo(vm.instance.name, type, value);
        }
    }]
});