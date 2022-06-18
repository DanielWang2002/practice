import React, {useState, useEffect, useContext} from 'react'
import {OpenContext} from "../context/ControlContext";
import {Button, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material";

const theme = createTheme({

    palette: {
        LinkToQuestionButton: {
            main: '#424242',
        }
    },

});

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
            <ThemeProvider theme={theme}>
                <header className="HomePage-header">
                    {/*<img src={logo} className="HomePage-logo" alt="logo"/>*/}
                    <h2 className={'HomePage-Title1'}>
                        臺北商業大學資訊管理系
                    </h2>
                    <h2 className={'HomePage-Title2'}>
                        轉學考題庫練習
                    </h2>
                    <br/>
                    <Button variant="contained" href="/question" color='LinkToQuestionButton'
                            className='LinkToQuestionButton' sx={{color: '#ffffff'}} size='large'>
                        正式測驗(40題)
                    </Button>
                    <br/>
                    <Button variant="contained" href="/Testquestion" color='LinkToQuestionButton'
                            className='LinkToQuestionButton' sx={{color: '#ffffff'}} size='large'>
                        牛刀小試(5題)
                    </Button>
                    <br/>
                    <p className={'Time'}>現在時間 {getDateTime()}</p>

                </header>
            </ThemeProvider>
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