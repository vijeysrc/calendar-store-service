import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import calendarStore from "../../../dist/redux-calendar-store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import App from "./app";

calendarStore.dispatch({
    type: "CREATE_CALENDAR_INSTANCE",
    name: "demo-1"
});

calendarStore.dispatch({
    type: "CREATE_CALENDAR_INSTANCE",
    name: "demo-2",
    base: new Date("2016-01-01"),
    chosen: new Date("2016-01-14")
});

calendarStore.dispatch({
    type: "CREATE_CALENDAR_INSTANCE",
    name: "demo-3",
    adjacents: [1],
    base: new Date("2012-05-01"),
    chosen: new Date("2012-05-14")
});

calendarStore.dispatch({
    type: "CREATE_CALENDAR_INSTANCE",
    name: "demo-4",
    adjacents: [1, -1],
    base: new Date("1947-08-01"),
    chosen: new Date("1947-08-15")
});

ReactDOM.render(
    <Provider store={calendarStore}>
        <div className="container">
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            Calendars - ReactJs
                        </a>
                    </div>
                </div>
            </nav>
            <App/>
        </div>
    </Provider>
  ,
  document.getElementById("wrapper")
);
