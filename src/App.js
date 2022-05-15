import logo from './2056977.svg';
import './App.css';

function App() {

    function DoExercises() {
        console.log('1')
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    請輸入欲挑戰題數
                </p>

                <input type={'number'}/>

                <br/>


                <button onClick={DoExercises}
                   className="DoExercises-link"
                >
                    點擊開始練習題目
                </button>
            </header>
        </div>
    );
}

export default App;
