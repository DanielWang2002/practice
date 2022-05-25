import React, {useState, useEffect} from 'react'

function Question() {

    console.log('--- invoke function component ---');
    const [QuestionsData, setQuestionsData] = useState(
        {}
    )

    useEffect(() => {
        console.log('execute function in useEffect');
        fetchQuestionsData()
    }, [])

    const fetchQuestionsData = () => {
        const requestOptions = {
            method: 'GET'
        };

        fetch('http://danielwang.xyz:3006/getQuestions', requestOptions)
            .then((res) => res.text())
            .then((responseData) => {
                let data = (JSON.parse(responseData)['data'])

                // 設置QuestionsData為API傳回的資料
                setQuestionsData(data)

            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            {console.log("Render")}
            <header className="QuestionsPage">
                <button onClick={() => {
                    console.log(QuestionsData)
                }}>
                    TestingBtn
                </button>
                <p>
                    題目區 <br/>
                </p>
                {/*列出所有題目&選項*/}
                {Object.entries(QuestionsData).map(([key, value]) => (
                    <div>
                        <p>{key}. {value['Description']}</p>
                        <input name={'OptDes_Q' + key} type={'radio'}/> {'(' + value['OptId1'] + ')'} {value['OptDes1']}<br/>
                        <input name={'OptDes_Q' + key} type={'radio'}/> {'(' + value['OptId2'] + ')'} {value['OptDes2']}<br/>
                        <input name={'OptDes_Q' + key} type={'radio'}/> {'(' + value['OptId3'] + ')'} {value['OptDes3']}<br/>
                        <input name={'OptDes_Q' + key} type={'radio'}/> {'(' + value['OptId4'] + ')'} {value['OptDes4']}<br/>
                    </div>
                ))}
            </header>
        </div>
    )

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}


export default Question