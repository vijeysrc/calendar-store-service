import Table from "./table";
import Nav from "./nav";

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <Nav name="demo-3"/>
                </div>
            </div>

            <br/>

            <div className="row">
                <div className="col-sm-6">
                    <Table name="demo-3"/>
                </div>
                <div className="col-sm-6">
                    <Table name="demo-3" adjacentIndex="1"/>
                </div>
            </div>
        </div>
    );
}