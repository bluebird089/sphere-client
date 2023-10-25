import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

export const DarkModeContext = createContext(null);

const Root = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Navbar>
            <DarkModeContext.Provider value={darkMode}>
                <Outlet></Outlet>
                <Footer></Footer>
            </DarkModeContext.Provider>
        </div>
    );
};

export default Root;