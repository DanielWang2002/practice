import logo from './programming.svg';
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import './App.css';

let problems_count = 0

function App() {

    return (
        <div className="App">
            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    請輸入欲挑戰題數
                </p>

                <input className="problems_count"
                       type="number"
                       onChange={(e) => {
                           problems_count = e.target.value;
                       }}
                />

                <br/>

                <button
                    className="link"
                >
                    點擊開始練習題目
                </button>

                <br/>

            </header>
        </div>
    );
}

function cl(msg = "") {
    console.log(getDateTime() + " " + msg)
}

async function sleep(ms) {
    await new Promise(r => setTimeout(r, ms))
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

export default App;
