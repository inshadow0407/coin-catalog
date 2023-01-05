import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCoin, getCoinById, editCoin } from "../store/store";
import "./styles/editCoin.css"

export default function EditCoin(){
    console.log(window.location.pathname.slice(1))
    let path = window.location.pathname.split("/").slice(3).toString();
    let dispatch = useDispatch();
    let coin;
    let save;

    useEffect(()=>{  
        dispatch({type:"ADD_CURRENT_COIN", payload: {}})
        console.log(coin);
        if(path && path!==" "){
             dispatch(getCoinById(path));
        }
        console.log("path:"+path, coin);
    },[coin, dispatch, save])

    coin = useSelector((state)=>state.current.coin);
    save = useSelector((state)=>state.current.save);
    
    
    function handleSubmit(event){
        event.preventDefault();
        let form = new FormData(event.target);
        let saveCoin={
            name:form.get("name"),
            value:form.get("value"),
            year:form.get("year"),
            price:form.get("price"),
            country:form.get("country"),
            metal:form.get("metal"),
            shortDescription:form.get("shortDescription"),
            longDescription:form.get("longDescription"),
            quality:form.get("quality"),
            weight:form.get("weight"),
            obverse:form.get("obverse"),
            reverse:form.get("reverse"),
            category:form.get("category"),
        }
        console.log(saveCoin);
        if(!path)dispatch(addCoin(saveCoin));
        else dispatch(editCoin(coin.id,saveCoin));
    }

    if((path.length===0) || (coin))
    {
    return (
        <div className="admin-panel">
            <h1 className="admin-title">Панель администратора</h1>
                <form className="coin-edit-form" onSubmit={handleSubmit}>
                    <div>
                        <label>Coin name<input defaultValue={coin && coin.name} name="name" type="text" /></label>
                        <label>Face value<input defaultValue={coin && coin.value} name="value" type="text" /></label>
                        <label>Year of issue<input defaultValue={coin && coin.year} name="year" type="text" /></label>
                        <label>Price<input defaultValue={coin && coin.price} name="price" type="text" /></label>
                        <label>Country<input defaultValue={coin && coin.country} name="country" type="text" /></label>
                        <label>Metal<input defaultValue={coin && coin.metal} name="metal" type="text" /></label>
                    </div>
                    <div>
                        <label id="short-description">Short description<textarea name="shortDescription" cols="30" rows="2" defaultValue={(coin && coin.shortDescription)}></textarea></label>
                        <label id="long-description">Long description <textarea name="longDescription" type="text" defaultValue={coin && coin.longDescription}></textarea></label>
                        <label>Quality of the coin<input name="quality" type="text" defaultValue={coin && coin.quality}/></label>
                        <label>Weight<input name="weight" type="text" defaultValue={coin && coin.weight}/></label>
                    </div>
                    <div>
                        <label>Link to obverse image<input name="obverse" type="text" defaultValue={coin && coin.obverse}/></label>
                        <label>Link to reverse image<input name="reverse" type="text" defaultValue={coin && coin.reverse}/></label>
                        <label>Category<input name="category" type="text" defaultValue={coin && coin.category}/></label>
                        {save && <p id="save">Изменения сохранены</p> }
                        <div><button>Сохранить</button><Link to="/AdminPanel"><button type="button">Отменить</button></Link></div>
                    </div>
                    
                </form>
        </div>
    )
                }
}