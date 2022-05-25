import React, {useContext} from 'react'
import {OpenContext} from "../context/ControlContext";

// css
const menuItemStyle = {
    marginBottom: "7px",
    paddingLeft: "26px",
    listStyle: "none"
};

function MenuItem(props) {

    const isOpenUtil = useContext(OpenContext)

    return <li style={menuItemStyle}>{props.text}</li>
}

export default MenuItem