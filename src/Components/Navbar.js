import {    NavLink} from "react-router-dom";

import { useContext } from "react";

import { useTheme } from "../theme-context";

const Navbar = () =>{
    // const themeContext = useContext(ThemeContext);
    // const theme=themeContext.isDarkMode?"dark": "light";
    // const toggleTheme = () =>{
    //     themeContext.setIsDarkMode(!themeContext.isDarkMode);
    //     document.documentElement.setAttribute('data-theme', theme);
    // };
    const {theme, toggleTheme} = useTheme();
    return (<div className="navbar">
        <ul>
            <li><NavLink to="Home">Home</NavLink></li>
            <li><NavLink to="About">About</NavLink></li>
            <li><NavLink to="Contact">Contact</NavLink></li>
            <li><NavLink to="Todos">Todos</NavLink></li>
            <li><NavLink to="OtpLogin">Login with OTP</NavLink></li>
        </ul>
        <input type="checkbox" value={theme} onChange={toggleTheme} />Light Theme
    </div>
)}
export default Navbar;