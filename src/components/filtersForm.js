import React from "react";
import "./styles/filtersForm.css"

export default function FiltersForm(){
    return (
        <div class="search-filters hidden">
                        
                        <div class="filter-form-selection">
                        <p>Страна выпуска</p>
                        <select class="filter-form-select"><option value=""></option></select>
                        <p>Металл</p>
                        <select class="filter-form-select"><option value=""></option></select>
                        <p>Качество монеты</p>
                        <select class="filter-form-select"><option value=""></option></select>
                        </div>
                        <div class="filter-form-inputs">
                            <div class="form-price">
                                <p>Цена</p>
                            <label>от<input class="filter-form-input" type="text"/></label>
                            <label>до<input class="filter-form-input" type="text"/></label>
                            </div>
                            <div class="form-date">
                               <p>Дата выпуска</p>
                            <label>от<input class="filter-form-input" type="text"/></label>
                            <label>до<input class="filter-form-input" type="year" /></label>
                            </div>
                        </div>
                    </div>
    )
}