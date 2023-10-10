

import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header';
import Footer from './footer';
import { Outlet } from "react-router-dom";



function Layout() {  
    return (
        
            <div className="container-fluid p-0 pb-5">
                <div className="row">
                    <div className= "col"><Header/></div>
                </div>
                <Outlet/>
                <div className="row">
                    <div className= "col"><Footer/></div>
                </div>
            </div>
    );
}

export default Layout;