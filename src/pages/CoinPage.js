import React from "react";
import { Link } from "react-router-dom";
import "./styles/CoinPage.css"

export default function CoinPage(){
    return (
        <div className="coin-details">
            <img src="images/Реверс.png" alt="coin" />
            <img src="images/Аверс.png" alt="coin" />
            <div className="coin-description">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor harum similique obcaecati quas dolore asperiores cumque beatae doloremque at maxime, iusto voluptatum molestiae neque optio unde error sapiente repudiandae provident commodi illum quisquam? Quam!</p>
                <ul className="description-table">
                    <li><p>Issuing Country</p><p>CANADA</p></li>
                    <li><p>Composition</p><p>Nickel</p></li>
                    <li><p>Quality</p><p></p></li>
                    <li><p>Denomination</p><p></p></li>
                    <li><p>Year</p><p></p></li>
                    <li><p>Weight</p><p></p></li>
                    <li><p>Price</p><p></p></li>
                </ul>
            </div>
        </div>
    )
}