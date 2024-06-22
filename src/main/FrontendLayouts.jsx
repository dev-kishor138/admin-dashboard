import { Outlet } from "react-router-dom";
import Footer from "../components/frontend/default/Footer";
import Navbar from "../components/frontend/default/Navbar";


const FrontendLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default FrontendLayouts;