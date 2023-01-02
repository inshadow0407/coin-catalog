import React from "react";
import { Link } from "react-router-dom";
import CoinsListAdmin from "../components/coinsListAdmin";
import Searchbox from "../components/searchbox";
import "./styles/AdminPanel.css"

export default function AdminPanel(){
    return (
        <div className="admin-panel">
            <h1 className="admin-title">Панель администратора</h1>
            <Searchbox/>
            <CoinsListAdmin/>
        </div>
    )
}