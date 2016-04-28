import {connect} from "react-redux";
import dateFormatter from "../../../dist/date-formatter";

const Table = ({name, adjacentIndex, state, goTo}) => {
    let structures = state[name].structures,
        matrix,
        title,
        rows = [];

    if (adjacentIndex && adjacentIndex !== 0) {
        matrix = structures.adjacents[adjacentIndex].matrix;
        title = dateFormatter(structures.adjacents[adjacentIndex].base, "mmmm yyyy");
    } else {
        matrix = structures.matrix;
        title = dateFormatter(state[name].base, "mmmm yyyy");
    }


    matrix.forEach((row, i) => {
        let cells = [];
        row.forEach((cell, j) => {
            let styleClassName = setStyleClassName(cell);
            cells.push(
                <td key={j} className={styleClassName.className} style={styleClassName.style} onClick={() => goTo({name: name, type: "SET_CHOSEN_DATE", chosen: cell.date})}>{cell.day}</td>
            )
        });
        rows.push(<tr key={i}>{cells}</tr>);
    });

    return (
        <table className="table table-bordered calendar-component">
            <thead>
                <tr>
                    <th colSpan="7" className="text-center">{title}</th>
                </tr>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Table);

function setStyleClassName (data) {
    let output = {
        className: "cursor-pointer text-center"
    };

    if (data.month === "prev" || data.month === "next") {
        output.className += " text-muted";
    } else {
        output.className += " text-primary";
    }

    if (data.chosen === true) {
        output.className += " date-chosen";
    }

    if (data.today === true) {
        output.className += " bg-danger";
    }

    return output;
}