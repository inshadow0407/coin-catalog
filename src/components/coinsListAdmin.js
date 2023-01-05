import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./styles/coinsListAdmin.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteCoin } from "../store/store";

export default function CoinsListAdmin(){
    let coinsList = useSelector((state)=>state.current.coinsCategory);
    let dispatch =useDispatch();
    useEffect(()=>{},[coinsList]);
    function clickHandler(id){
        console.log(id)
        dispatch(deleteCoin(id))
    }
return (coinsList) ?
     (
        <>
        <p className="list-name-a">Монеты:</p>
        <ul className="coins-list-a">
            {coinsList.map((coin)=>{
                if(!coin) return null
                else return <li key={coin.id}><img src={coin.obverse} alt="coin" /><h3>{coin.name}</h3><p>{coin.shortDescription}</p><Link to={"editCoin/"+coin.id}><button>Редактировать</button></Link><button onClick={()=>clickHandler(coin.id)}>Удалить</button></li>
            })}
            <li><Link to="editCoin"><div className="circle"><p>+</p></div></Link><Link to="editCoin"><p>Добавить новую монету</p></Link></li> 
        </ul>
        </>
    ): <h1>LOADING...</h1>
}
