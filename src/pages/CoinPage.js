import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/CoinPage.css"
import { getCoinById } from "../store/store";

export default function CoinPage(){
    let dispatch = useDispatch();
    let coin;

    useEffect(()=>{
        
    dispatch(getCoinById(window.location.pathname.slice(1)))
    

    console.log(window.location.pathname.slice(1), coin);
    },[coin, dispatch])

    coin = useSelector((state)=>state.current.coin);
    if(coin===undefined){
        return <h1>Loading...</h1>
    }
    return (
        <div className="coin-details">
            <img src={"./"+coin.obverse} alt="coin" />
            <img src={"./"+coin.reverse} alt="coin" />
            <div className="coin-description">
                <h1>{coin.name}</h1>
                <p>{coin.longDescription}</p>
                <ul className="description-table">
                    <li><p>Issuing Country</p><p>{coin.country}</p></li>
                    <li><p>Composition</p><p>{coin.metal}</p></li>
                    <li><p>Quality</p><p>{coin.quality}</p></li>
                    <li><p>Denomination</p><p>{coin.value}</p></li>
                    <li><p>Year</p><p>{coin.year}</p></li>
                    <li><p>Weight</p><p>{coin.weight}</p></li>
                    <li><p>Price</p><p>{coin.price}</p></li>
                </ul>
            </div>
        </div>
    )
}