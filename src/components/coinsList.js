import React from "react";
import { Link } from "react-router-dom";
import "./styles/coinsList.css";

export default function CoinsList(){
    return (
        <>
        <p className="list-name">Результаты:</p>
        <ul className="coins-list">
            <li><Link className="link-to-description" to="/CoinPage"><img src="./images/1.png" alt="coin" /><h3>Имя монеты</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim placeat repellendus vitae aliquam possimus, impedit nobis nulla.</p></Link></li>
            <li><Link className="link-to-description" to="/CoinPage"><img src="./images/1.png" alt="coin" /><h3>Name of coin</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt dolores magnam tempore numquam ad commodi harum culpa!</p></Link></li>
            <li><Link className="link-to-description" to="/CoinPage"><img src="./images/1.png" alt="coin" /><h3>Name of coin</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt dolores magnam tempore numquam ad commodi harum culpa!</p></Link></li>
            <li><Link className="link-to-description" to="/CoinPage"><img src="./images/1.png" alt="coin" /><h3>Name of coin</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt dolores magnam tempore numquam ad commodi harum culpa!</p></Link></li>
            <li><Link className="link-to-description" to="/CoinPage"><img src="./images/1.png" alt="coin" /><h3>Name of coin</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt dolores magnam tempore numquam ad commodi harum culpa!</p></Link></li>
            <li><Link className="link-to-description" to="/CoinPage"><img src="./images/1.png" alt="coin" /><h3>Name of coin</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt dolores magnam tempore numquam ad commodi harum culpa!</p></Link></li>
            <li><Link className="link-to-description" to="/CoinPage"><img src="./images/1.png" alt="coin" /><h3>Name of coin</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt dolores magnam tempore numquam ad commodi harum culpa!</p></Link></li>
            <li><Link className="link-to-description" to="/CoinPage"><img src="./images/1.png" alt="coin" /><h3>Name of coin</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt dolores magnam tempore numquam ad commodi harum culpa!</p></Link></li>
            <li><Link className="link-to-description" to="/CoinPage"><img src="./images/1.png" alt="coin" /><h3>Name of coin</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt dolores magnam tempore numquam ad commodi harum culpa!</p></Link></li>
            <li><Link className="link-to-description" to="/CoinPage"><img src="./images/1.png" alt="coin" /><h3>Name of coin</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt dolores magnam tempore numquam ad commodi harum culpa!</p></Link></li>
        </ul>
        </>
    )
}
