import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./styles/coinsList.css";
import { useSelector } from "react-redux";

export default function CoinsList(){
    let coinsList = useSelector((state)=>state.current.coinsCategory);
    let [searchParams, setSearchParams]= useSearchParams()
    
    useEffect(()=>{},[coinsList])
    console.log(searchParams.toString(),window.location.pathname)
    return (coinsList) ?
    
    
     (
        <>
        <p className="list-name">Результаты:</p>
        <ul className="coins-list">
            {coinsList.map((coin)=>{
                return <li key={coin.id}><Link className="link-to-description" to={"/"+coin.id}><img src={coin.obverse} alt="coin" /><h3>{coin.name}</h3><p>{coin.shortDescription}</p></Link></li>
            })}
        </ul>
        </>
    ): <h1>LOADING...</h1>
}
