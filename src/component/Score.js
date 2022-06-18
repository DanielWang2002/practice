import React, {useState, useEffect} from "react"
import '../css/Score.css'
import {Link} from "react-router-dom";

// 分數
let score = 0

function Score(props) {

    const [QuestionsData, setQuestionsData] = useState(
        {}
    )

    useEffect(() => {
        fetchQuestionsData()
    }, [])

    const fetchQuestionsData = () => {
        const requestOptions = {
            method: 'GET'
        };

        fetch('http://danielwang.xyz:3006/getAllQuestions', requestOptions)
            .then((res) => res.text())
            .then((responseData) => {
                let data = (JSON.parse(responseData)['data'])

                // 設置QuestionsData為API傳回的資料
                setQuestionsData(data)

            })
            .catch(error => console.log('error', error));
    }

    try {

        return (
            <div>
                <header className={'ScorePage-header'}>

                    {Object.entries(props.answerList).map(([QId, data]) => {
                        let QData = Object.entries(QuestionsData)[QId - 1][1];
                        let answer = QData['Answer'];

                        if (answer === data) {
                            // 答對
                            score += (100 / (Object.entries(props.answerList).length));
                        }
                    })}

                    <p className='total-score'>您的分數：{score}</p>

                    {Object.entries(props.answerList).map(([QId, data]) => {
                        let QData = Object.entries(QuestionsData)[QId - 1][1]
                        let answer = QData['Answer']

                        if (answer === data) {
                            // 答對
                            return (
                                <div className='correct-answer'>
                                    <p>{QData['Description']}</p>
                                    <p>(A) {QData['OptDes1']}</p>
                                    <p>(B) {QData['OptDes2']}</p>
                                    <p>(C) {QData['OptDes3']}</p>
                                    <p>(D) {QData['OptDes4']}</p>
                                    <p>您的答案 {data} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 正確答案 {answer}</p>
                                </div>
                            )
                        } else {
                            // 答錯
                            return (
                                <div className='incorrect-answer'>
                                    <p>{QData['Description']}</p>
                                    <p>(A) {QData['OptDes1']}</p>
                                    <p>(B) {QData['OptDes2']}</p>
                                    <p>(C) {QData['OptDes3']}</p>
                                    <p>(D) {QData['OptDes4']}</p>
                                    <p>您的答案 {data} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 正確答案 {answer}</p>
                                </div>
                            )
                        }
                    })}

                    <Link to={'/question'}>
                        <button className="LinkToQuestions" onClick={() => {score = 0}}>
                            重新測驗(40題)
                        </button>
                    </Link>
                    <Link to={'/testQuestion'}>
                        <button className="LinkToQuestions" onClick={() => {score = 0}}>
                            重新測驗(5題)
                        </button>
                    </Link>
                    <Link to={'/'}>
                        <button className="LinkToHome" onClick={() => {score = 0}}>
                            回到首頁
                        </button>
                    </Link>

                </header>
            </div>
        )
    } catch (e) {

    }


}

export default Score