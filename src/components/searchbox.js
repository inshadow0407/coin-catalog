import "./styles/searchbox.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCoinsByParams } from "../store/store";
import { useSearchParams } from "react-router-dom";

export default function Searchbox(){
    let options =useSelector((state)=>state.current.options);
    let [searchParams, setSearchParams]=useSearchParams();
    let dispatch=useDispatch();
    console.log("searchbox path:"+window.location.pathname);

    let submitHandler=(event)=>{
        event.preventDefault();
        let form = new FormData(document.querySelector(".search-form"));
        console.log(form.get("searchline"));


        let sendParams="?"+"searchline="+form.get("searchline")+"&"+"country="+
        form.get("country")+"&"+"metal="+form.get("metal")+"&"+"quality="+form.get("quality")+"&"+
        "priceFrom="+form.get("priceFrom")+"&"+"priceTo="+form.get("priceTo")+"&"+
        "yearFrom="+form.get("yearFrom")+"&"+"yearTo="+form.get("yearTo");
        if(window.location.pathname.slice(1)===("/CommemorativeCoins"||"/ExclusiveCoins"||"/BullionCoins"||"/all")){
            dispatch(getCoinsByParams(window.location.pathname.slice(1),sendParams));
        }
        else dispatch(getCoinsByParams("/all",sendParams));
        setSearchParams(sendParams);
    }
    return (
        <>
<h1 className="page-title">Список монет</h1>
<div className="searchbox">
    <form onSubmit={submitHandler} className="search-form">
        <p className="input-text-title">
            Введите слово для поиска
        </p>
        <input className="searchline" type="text" name="searchline"/>
        <button className="search-button">Поиск</button>
        <p 
        onClick={(event)=>
        {
            document.querySelector(".search-filters").classList.toggle("hidden");
            document.querySelector(".arrow").classList.toggle("down");
        }
        } className="search-filters-title">Фильтры поиска <span className="arrow down">^</span></p>
      
      
       <div className="search-filters hidden">
                        
                        <div className="filter-form-selection">
                        <p>Страна выпуска</p>
                        {options && <select name="country" defaultValue=" " className="filter-form-select">
                              {
                                options.countries.map((country)=>{
                                return <option key={country} value={country}>{country}</option>
                            })}
                            </select>}
                        <p>Металл</p>
                        {options && <select name="metal" className="filter-form-select">
                                {
                                options.metals.map((metal)=>{
                                return <option key={metal} value={metal}>{metal}</option>
                            })}
                            </select>}
                        <p>Качество монеты</p>
                        {options && <select name="quality" className="filter-form-select">
                             {
                                options.quality.map((element)=>{
                                return <option key={element} value={element}>{element}</option>
                            })}    
                        </select>}
                        </div>
                        <div className="filter-form-inputs">
                            <div className="form-price">
                                <p>Цена</p>
                            <label>от<input name="priceFrom" className="filter-form-input" type="text"/></label>
                            <label>до<input name="priceTo" className="filter-form-input" type="text"/></label>
                            </div>
                            <div className="form-date">
                               <p>Дата выпуска</p>
                            <label>от<input name="yearFrom" className="filter-form-input" type="text"/></label>
                            <label>до<input name="yearTo" className="filter-form-input" type="year" /></label>
                            </div>
                        </div>
                    </div>
    </form>
        
</div>
</>
)
}
