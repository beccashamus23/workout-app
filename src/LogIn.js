import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUser from './User/CreateUser';

export default function LogIn () {
    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <Link to="/">
                <button className="loginButton">Home</button>
            </Link>
            <CreateUser />
        </div>
    );
};