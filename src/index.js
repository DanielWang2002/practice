import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MenuPage from "./page/MenuPage";
import HomePage from "./page/HomePage";
import QuestionPage from "./page/QuestionPage";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

const Layout = (props) => {
    return(
        <>
            <nav>
                <Link to="/">home</Link>
                <Link to="/menu" style={{marginLeft: 25}}>menu</Link>
                <Link to="/question" style={{marginLeft: 25}}>question</Link>
            </nav>
            { props.children }
        </>
    )
}


root.render(
    <Router>
        <Switch>
            <Layout>
                <Route exact={true} path={'/'} component={HomePage}>
                    <React.StrictMode>
                        <HomePage/>
                    </React.StrictMode>
                </Route>
                <Route path={'/menu'} component={MenuPage}>
                    <React.StrictMode>
                        <MenuPage/>
                    </React.StrictMode>
                </Route>
                <Route path={'/question'} component={QuestionPage}>
                    <React.StrictMode>
                        <QuestionPage/>
                    </React.StrictMode>
                </Route>
            </Layout>
        </Switch>
    </Router>
)