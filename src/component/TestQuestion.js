import React, {useState, useEffect} from 'react'

import '../css/Question.css'
import {Link} from "react-router-dom";

// 儲存Answer及QId ex: {'2':'A', '17':'C'}
let GLOBOL_Answer_QId = {}
let GLOBOL_AllAnswerHasChecked = false

function TestQuestion() {

    // 清空GLOBOL_Answer_QId
    GLOBOL_Answer_QId = {}

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

        fetch('http://danielwang.xyz:3006/getTestQuestions', requestOptions)
            .then((res) => res.text())
            .then((responseData) => {
                let data = (JSON.parse(responseData)['data'])

                // 設置QuestionsData為API傳回的資料
                setQuestionsData(data)

            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className='background'>
            <header className="QuestionsPage-header">
                <p className='QuestionsPage-title'>
                    計算機概論
                    <br/>
                </p>
                {/*列出所有題目&選項*/}
                {Object.entries(QuestionsData).map(([key, value]) => (

                    <div className='QuestionsDiv'>
                        <p>{key}. {value['Description']}</p>
                        <div className="col">
                            &nbsp;<input name={'OptDes_Q' + key}
                                         value='A'
                                         type={'radio'}
                                         onClick={() => {
                                             addAnswerWithQId('A', value['QId'])
                                         }}/>&nbsp;
                            {'(' + value['OptId1'] + ')'} {value['OptDes1']}
                        </div>
                        <div className="col">
                            &nbsp;<input name={'OptDes_Q' + key}
                                         value='B'
                                         type={'radio'}
                                         onClick={() => {
                                             addAnswerWithQId('B', value['QId'])
                                         }}/>&nbsp;
                            {'(' + value['OptId2'] + ')'} {value['OptDes2']}
                        </div>
                        <div className="col">
                            &nbsp;<input name={'OptDes_Q' + key}
                                         value='C'
                                         type={'radio'}
                                         onClick={() => {
                                             addAnswerWithQId('C', value['QId'])
                                         }}/>&nbsp;
                            {'(' + value['OptId3'] + ')'} {value['OptDes3']}
                        </div>
                        <div className="col">
                            &nbsp;<input name={'OptDes_Q' + key}
                                         value='D'
                                         type={'radio'}
                                         onClick={() => {
                                             addAnswerWithQId('D', value['QId'])
                                         }}/>&nbsp;
                            {'(' + value['OptId4'] + ')'} {value['OptDes4']}
                        </div>
                        <br/>
                    </div>

                ))}
                <br/>

                <Link to='/score'>
                    <button className='submit-btn' onClick={(e) => {

                        // 確認題目是否都完成了
                        checkEmptyAnswer()
                        // 如果有題目未完成，取消Link動作
                        if (!GLOBOL_AllAnswerHasChecked) e.preventDefault()

                    }}> 提交答案
                    </button>
                </Link>
                <Link to={'/'}>
                    <button className="LinkToHome">
                        回到首頁
                    </button>
                </Link>

            </header>
        </div>
    )

}

// 將Answer及QId儲存在Dict，供Link to /score時做使用
function addAnswerWithQId(answer, QId) {
    GLOBOL_Answer_QId[QId] = answer
}

export function getAnswerWithQIdTest() {
    return GLOBOL_Answer_QId
}


// 確認是否有未作答的答案
function checkEmptyAnswer() {

    /*
    如果定義text時出錯代表無答案，以X代替
     */

    // i = 題數
    for (let i = 1; i <= 5; i++) {

        try {
            const text = document.querySelector(`input[name=OptDes_Q${i.toString()}]:checked`).value
        } catch (e) {
            alert(`第 ${i.toString()} 題未作答，請檢查！`)
            return
        }

    }

    GLOBOL_AllAnswerHasChecked = true
}

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max) + 1;
// }


export default TestQuestion
