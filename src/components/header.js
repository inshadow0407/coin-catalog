import React from "react";
import  "./styles/header.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header(){
    let logged = useSelector((state)=>state.current.logged)
    return (
        <header>
        <div className="wrapper header">
            <p className="site-name"><Link to="/">Каталог монет</Link></p>
            <p className="logo">★</p>
            <div className="navigation">
                <Link to="/BullionCoins">Памятные монеты</Link>
                <Link to="/CommemorativeCoins">Инвестиционные монеты</Link>
                <Link to="/ExclusiveCoins">Эксклюзивные монеты</Link>
            </div>
            <p className="username"></p>
            <Link to="/login"><button className="login-button">{(logged)?"Выйти":"Войти"}</button></Link>
        </div>
    </header>
    )
}