import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { login } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import crc32 from 'crc-32';
import "./styles/Login.css"

export default function Login(){
    let dispatch= useDispatch(); 
    let logged= useSelector((state)=>state.current.logged)
    useEffect(()=>{},[logged])
    function handleSubmit(event){
        event.preventDefault();
        let form = new FormData(event.target)

        dispatch(login({userName: form.get("login"), password:crc32.str(form.get("password"))}))
        
    }    if(logged) window.location.href="/AdminPanel";

    else {return (
        <>
            <h1 className="login-title">Войти в учетную запись</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label>Логин <input type="text" name="login" /></label>
                <label>Пароль<input type="password" name="password"/></label>
                <button>Войти</button>
            </form>

        </>
    )}
}