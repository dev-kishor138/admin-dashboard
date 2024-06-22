import { Outlet } from "react-router-dom";
// import Navbar from "../components/backend/default/Navbar";
import Footer from "../components/backend/default/Footer";
import Header from "../components/backend/default/Header";
import Sidebar from "../components/backend/default/Sidebar";


const BackendLayouts = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default BackendLayouts;