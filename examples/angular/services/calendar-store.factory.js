angular.module("app").factory("CalendarStore", ["$window", function ($window){
    var CalendarService = $window.CalendarService, instances = {};

    delete($window.CalendarService);

    function getInstance (name, base, chosen, adjacents) {
        return instances[name];
    }

    function createInstance (name, base, chosen, adjacents) {
        var instance;

        if (!instances[name]) {
            instance = CalendarService.getStructureByName(name, base, chosen, adjacents);
            angular.merge(instances, instance);
        }

        return instances[name];
    }

    function goTo (name, type, value) {
        var newBase, instance = getInstance(name);

        if (type === "chosen") {
            instance = CalendarService.getStructureByName(instance.name, instance.base, value, instance.adjacents);
        } else {
            newBase = CalendarService.goTo(instance.base, type, value);
            instance = CalendarService.getStructureByName(instance.name, newBase, instance.chosen, instance.adjacents);
        }

        delete instances[name].structures;
        angular.merge(instances, instance);
    }

    return {
        getInstance: getInstance,
        createInstance: createInstance,
        goTo: goTo
    }
}]);
