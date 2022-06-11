import logo from '../programming.svg';
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import '../css/HomePage.css';
import {useEffect, useState} from "react";
import {OpenContext} from "../context/ControlContext";
import Home from "../component/Home";

const HomePage = () => {

    const [isOpen, setIsOpen] = useState(true)

    return (
        <OpenContext.Provider value={{
            openContext: isOpen,
            setOpenContext: setIsOpen
        }}>
            <Home></Home>
        </OpenContext.Provider>
    );
}

export default HomePage;
