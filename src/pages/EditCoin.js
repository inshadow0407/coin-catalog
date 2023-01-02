import React from "react";
import { Link } from "react-router-dom";
import "./styles/editCoin.css"

export default function EditCoin(){
    return (
        <div className="admin-panel">
            <h1 className="admin-title">Панель администратора</h1>
                <form className="coin-edit-form">
                    <div>
                        <label>Coin name<input name="name" type="text" /></label>
                        <label>Face value<input name="faceValue" type="text" /></label>
                        <label>Year of issue<input name="year" type="text" /></label>
                        <label>Price<input name="price" type="text" /></label>
                        <label>Country<input name="country" type="text" /></label>
                        <label>Metal<input name="metal" type="text" /></label>
                    </div>
                    <div>
                        <label id="short-description">Short description<textarea name="description" cols="30" rows="2"></textarea></label>
                        <label id="long-description">Long description <textarea name="longDescription" type="text"></textarea></label>
                        <label>Quality of the coin<input name="quality" type="text"/></label>
                        <label>Weight<input name="weight" type="text"/></label>
                    </div>
                    <div>
                        <label>Link to obverse image<input name="obverse" type="text"/></label>
                        <label>Link to reverse image<input name="reverse" type="text"/></label>
                        <div><button>Сохранить</button><Link to="/AdminPanel"><button>Отменить</button></Link></div>
                    </div>
                    
                </form>
        </div>
    )
}