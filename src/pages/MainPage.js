import React from "react";
import { Link } from "react-router-dom";
import Searchbox from "../components/searchbox";
import "./styles/MainPage.css"
import CoinsList from "../components/coinsList";
import { useDispatch } from "react-redux";
import { getCoinsByParams, getOptions } from "../store/store";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function MainPage(props){
    let dispatch = useDispatch();
    let [searchParams, setSearchParams]= useSearchParams();
    dispatch(getOptions());
    useEffect(()=>{},[dispatch]);


    if(props.category==="*"){
        return(
            <>
            <h1>
                Запрашиваемая страница не существует!
            </h1>
        </>
        )
    }
    else if(props.category!==undefined){
        dispatch(getCoinsByParams(props.category,searchParams.toString()));
        return(
            <>
            <Searchbox/>
            <CoinsList/>
        </>
        )
    }
    else if(searchParams.toString().length!==0){
        dispatch(getCoinsByParams(props.category,searchParams.toString()));
        console.log(searchParams.length)
        return(
            <>
            <Searchbox/>
            <CoinsList/>
        </>
        )
    }
    else {
        return (
        <>
            <Searchbox/>
            <ul className="coins-categories">
                <li><h2>Памятные монеты</h2><Link to="/BullionCoins">Посмотреть все <span>^</span></Link><img src="/images/3.png" alt="coin" /></li>
                <li><h2>Эксклюзивные монеты</h2><Link to="/ExclusiveCoins">Посмотреть все <span>^</span></Link><img src="../images/1.png" alt="coin" /></li>
                <li><h2>Инвестиционные монеты</h2><Link to="/CommemorativeCoins">Посмотреть все <span>^</span></Link><img src="../images/2.png" alt="coin" /></li>                
            </ul>
        </>
    )}
}