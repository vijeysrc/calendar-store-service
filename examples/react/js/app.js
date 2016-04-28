import SingleInstance from "./single-instance";
import MultipleInstance2 from "./multiple-instance-2";
import MultipleInstance3 from "./multiple-instance-3";

let App = React.createClass({
    getInitialState: function() {
        return {
            tabs: [
                {
                    title: "Single Instance",
                    content: <SingleInstance/>
                },
                {
                    title: "Multiple Instances (2)",
                    content: <MultipleInstance2/>
                },
                {
                    title: "Multiple Instances (3)",
                    content: <MultipleInstance3/>
                }
            ],
            active: 0
        };
    },

    changeTab: function (i, e) {
        e.preventDefault();
        if (i !== this.state.active) {
            this.setState({
                active: i
            });
        }
    },

    render: function() {
        let headers = [];
        this.state.tabs.forEach((tab, i) => {
            headers.push(
                <li key={i} onClick={this.changeTab.bind(this, i)} role="presentation" className={i === this.state.active ? "active" : ""}><a href="#"><strong>{tab.title}</strong></a></li>
            );
        });
        return (
            <div>
                <ul className="nav nav-tabs">
                    {headers}
                </ul>
                <br/>
                <div>
                    {this.state.tabs[this.state.active].content}
                </div>
            </div>
        );
    }
});

export default App;