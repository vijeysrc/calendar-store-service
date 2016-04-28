import {createStore} from "redux";
import {getStructureByName, goTo} from "../calendar-service";

let reducer;

reducer = (state = getStructureByName("default"), action) => {
    let name = action.name || "default",
        currInstance = state[name],
        base = action.base,
        chosen = action.chosen,
        adjacents = action.adjacents;

    switch (action.type) {
        case "CREATE_CALENDAR_INSTANCE":
            if (!currInstance) {
                return Object.assign({}, state, getStructureByName(name, base, chosen, adjacents))
            }

        case "SET_BASE_DATE":
            return Object.assign({}, state, getStructureByName(name, base, currInstance.chosen, currInstance.adjacents));

        case "SET_CHOSEN_DATE":
            return Object.assign({}, state, getStructureByName(name, currInstance.base, chosen, currInstance.adjacents));

        case "GO_TO_PREVIOUS_MONTH":
            return reducer(state, {
                type: "SET_BASE_DATE",
                base: goTo(currInstance.base, "month", "prev"),
                name: name
            });

        case "GO_TO_NEXT_MONTH":
            return reducer(state, {
                type: "SET_BASE_DATE",
                base: goTo(currInstance.base, "month", "next"),
                name: name
            });

        case "GO_TO_PREVIOUS_YEAR":
            return reducer(state, {
                type: "SET_BASE_DATE",
                base: goTo(currInstance.base, "year", "prev"),
                name: name
            });

        case "GO_TO_NEXT_YEAR":
            return reducer(state, {
                type: "SET_BASE_DATE",
                base: goTo(currInstance.base, "year", "next"),
                name: name
            });

        default:
            return state;
    }
};

export default createStore(reducer);
