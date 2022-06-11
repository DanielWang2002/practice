import React, {useState, useEffect, useContext} from 'react'
import {OpenContext} from "../context/ControlContext";
import logo from "../programming.svg";
import {Link} from "react-router-dom";
function Home() {

    const isOpenUtil = useContext(OpenContext)

    useEffect(() => {

        if (isOpenUtil.openContext) {
            let updateTimeInterval = setInterval(() => {
                document.getElementsByClassName('Time')[0].textContent = `現在時間 ${getDateTime()}`
            }, 500)
            return () => clearInterval(updateTimeInterval)
        }

    }, [isOpenUtil.openContext])



    return (
        <div className="HomePage">
            <header className="HomePage-header">
                {/*<img src={logo} className="HomePage-logo" alt="logo"/>*/}
                <h2 className={'HomePage-Title1'}>
                    計算機概論
                </h2>
                <h2 className={'HomePage-Title2'}>
                    題庫練習
                </h2>
                <br/>
                <Link to={'/question'}>
                    <button className="link">
                        點擊開始練習題目
                    </button>
                </Link>
                <br/>
                <p className={'Time'}>現在時間 {getDateTime()}</p>

            </header>
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

export default Home