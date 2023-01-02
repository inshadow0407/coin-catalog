import React from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css"

export default function Login(){
    return (
        <>
            <h1 className="login-title">Войти в учетную запись</h1>
            <form className="login-form">
                <label>Логин <input type="text" name="login" /></label>
                <label>Пароль<input type="password" name="password"/></label>
                <button>Войти</button>
            </form>

        </>
    )
}