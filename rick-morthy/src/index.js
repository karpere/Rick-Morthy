import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";


const Index = () => {

    return (
            <BrowserRouter>
                <Routes>
                            <Route path="/" element={<App/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
    )
}

ReactDOM.render(<Index/>, document.getElementById('root'));
