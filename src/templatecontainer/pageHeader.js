import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class PageHeader extends React.Component {
    render() {
        return (
            <>
                <div className="row p-1 bg-info-subtle text-dark">
                    <div className="col text-start fs-5">
                            {this.props.headerLabel}
                    </div>
                </div>
        </>
        );
    }
}

export default PageHeader;