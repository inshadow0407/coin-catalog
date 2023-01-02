import React from "react";
import { Link } from "react-router-dom";
import "./styles/coinsListAdmin.css";

export default function CoinsListAdmin(){
    return (
        <>
        <p className="list-name-a">Монеты:</p>
        <ul className="coins-list-a">
            <li><img src="./images/1.png" alt="coin" /><h3>Имя монеты</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim placeat repellendus vitae aliquam possimus, impedit nobis nulla.</p><Link to="editCoin"><button>Редактировать</button></Link><button>Удалить</button></li>
            <li><img src="./images/1.png" alt="coin" /><h3>Имя монеты</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim placeat repellendus vitae aliquam possimus, impedit nobis nulla.</p><Link to="editCoin"><button>Редактировать</button></Link><button>Удалить</button></li>
            <li><img src="./images/1.png" alt="coin" /><h3>Имя монеты</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim placeat repellendus vitae aliquam possimus, impedit nobis nulla.</p><Link to="editCoin"><button>Редактировать</button></Link><button>Удалить</button></li>
            <li><img src="./images/1.png" alt="coin" /><h3>Имя монеты</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim placeat repellendus vitae aliquam possimus, impedit nobis nulla.</p><Link to="editCoin"><button>Редактировать</button></Link><button>Удалить</button></li>
            <li><img src="./images/1.png" alt="coin" /><h3>Имя монеты</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim placeat repellendus vitae aliquam possimus, impedit nobis nulla.</p><Link to="editCoin"><button>Редактировать</button></Link><button>Удалить</button></li>
            <li><img src="./images/1.png" alt="coin" /><h3>Имя монеты</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim placeat repellendus vitae aliquam possimus, impedit nobis nulla.</p><Link to="editCoin"><button>Редактировать</button></Link><button>Удалить</button></li>
            <li><Link to="/editCoin"><div className="circle"><p>+</p></div></Link><Link to="editCoin"><p>Добавить новую монету</p></Link></li> 
        </ul>
        </>
    )
}
