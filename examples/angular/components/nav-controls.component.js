angular.module("app").component("navControls", {
    bindings: {
        instance: "="
    },
    templateUrl: "components/nav-controls.template.html",
    controller: ["CalendarStore", function (CalendarStore) {
        var vm = this;
        vm.today = new Date();

        vm.goTo = function (type, dir) {
            CalendarStore.goTo(vm.instance.name, type, dir);
        }
    }]
});
