import {connect} from "react-redux";
import dateFormatter from "../../../dist/date-formatter";

const Nav = ({name, state, goTo}) => {
    let chosen = dateFormatter(state[name].chosen, "dd, mmm yyyy"),
        today = dateFormatter(new Date(), "dd, mmm yyyy");

    return (
        <div className="row">
            <div className="col-sm-4">
                <a href="#" className="btn btn-default btn-block btn-sm" onClick={(e) => {
                    e.preventDefault();
                    goTo({name: name, type: "GO_TO_PREVIOUS_MONTH"});
                }}>
                    &larr; Month
                </a>
                <a href="#" className="btn btn-primary btn-block btn-sm" onClick={(e) => {
                    e.preventDefault();
                    goTo({name: name, type: "GO_TO_PREVIOUS_YEAR"})
                }}>
                    &larr; Year
                </a>
            </div>
            <div className="col-sm-4 text-center small">
                <strong>Chosen Date</strong>
                <br/>
                {chosen}
                <br/>
                <strong>Today</strong>
                <br/>
                {today}
            </div>
            <div className="col-sm-4">
                <a href="#" className="btn btn-default btn-block btn-sm" onClick={(e) => {
                    e.preventDefault();
                    goTo({name: name, type: "GO_TO_NEXT_MONTH"});
                }}>
                    Month &rarr;
                </a>
                <a href="#" className="btn btn-primary btn-block btn-sm" onClick={(e) => {
                    e.preventDefault();
                    goTo({name: name, type: "GO_TO_NEXT_YEAR"});
                }}>
                    Year &rarr;
                </a>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        goTo: (action) => {
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);