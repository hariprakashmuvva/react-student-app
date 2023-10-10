import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

class Footer extends React.Component{   
    
    render() {
        return (
        <div className="p-2 bg-body-secondary text-dark fixed-bottom">
            <div className="container text-center">
                <div className="row">
                <div className="col border-right">                            
                        <Link to="/home"><i className="fs-2 bi bi-house"></i></Link>
                    </div>
                    <div className="col">
                        <Link to="/addperson"><i className="fs-2 bi bi-person-plus"></i></Link>
                    </div>
                    <div className="col">
                        <i className="fs-2 bi bi-list"></i>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Footer;