import React, {useState, useEffect, useContext} from 'react'
import {OpenContext} from "../context/ControlContext";

const menuContainerStyle = {
    position: "relative",
    width: "300px",
    padding: "14px",
    fontFamily: "Microsoft JhengHei",
    paddingBottom: "7px",
    backgroundColor: "white",
    border: "1px solid #E5E5E5",
};

const menuTitleStyle = {
    marginBottom: "7px",
    fontWeight: "bold",
    color: "#00a0e9",
    cursor: "pointer",
};

const menuBtnStyle = {
    position: "absolute",
    right: "7px",
    top: "33px",
    backgroundColor: "transparent",
    border: "none",
    color: "#00a0e9",
    outline: "none"
}

function Menu(props) {

    const isOpenUtil = useContext(OpenContext)

    useEffect(() => {

        let updateInterval = setInterval(() => {
            isOpenUtil.setOpenContext(!isOpenUtil.openContext)
        }, 800)
        return () => clearInterval(updateInterval)

    }, [isOpenUtil.openContext])

    return (
        <div style={menuContainerStyle}>
            <p style={menuTitleStyle}>{props.title}</p>
            <button style={menuBtnStyle} onClick={() => {
                isOpenUtil.setOpenContext(!isOpenUtil.openContext)
            }}>
                {(isOpenUtil.openContext) ? "收起" : "展開"}
            </button>
            <ul>{isOpenUtil.openContext && props.children}</ul>
            {/*<p className={'Time'}>現在時間 {getDateTime()}</p>*/}
        </div>
    )

}

function getDateTime() {

    let date = new Date();

    let hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    let min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    let sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    let year = date.getFullYear();

    let month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    let day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;

}

export default Menu