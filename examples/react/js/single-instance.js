import Table from "./table";
import Nav from "./nav";

export default () => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-offset-2 col-sm-8">
                        <Nav name="demo-1"/>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-offset-2 col-sm-8">
                        <Table name="demo-1"/>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-offset-2 col-sm-8">
                        <Nav name="demo-2"/>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-offset-2 col-sm-8">
                        <Table name="demo-2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}