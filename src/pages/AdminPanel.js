import React, {useEffect} from "react";
import CoinsListAdmin from "../components/coinsListAdmin";
import Searchbox from "../components/searchbox";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getOptions, getCoinsByParams } from "../store/store";
import "./styles/AdminPanel.css"


export default function AdminPanel(){
    let dispatch = useDispatch();
    let [searchParams, setSearchParams]= useSearchParams();
    dispatch(getOptions());
    useEffect(()=>{},[dispatch]);


    if(searchParams.toString().length!==0){
        dispatch(getCoinsByParams("",searchParams.toString()));
        console.log(searchParams.length)
        return(
            <>
            
            <div className="admin-panel">
            <h1 className="admin-title">Панель администратора</h1>
            <Searchbox/>
            <CoinsListAdmin/>
        </div>
   
        </>
        )
    }
    else 
    { console.log("12345678");
        dispatch(getCoinsByParams("all",""));

        return (
        <div className="admin-panel">
            <h1 className="admin-title">Панель администратора</h1>
            <Searchbox/>
            <CoinsListAdmin/>
        </div>
    )}
}