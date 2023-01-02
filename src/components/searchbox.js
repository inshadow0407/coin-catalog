import "./styles/searchbox.css";
import FiltersForm from "./filtersForm";

export default function Searchbox(){
    return (
        <>
<h1 className="page-title">Список монет</h1>
<div className="searchbox">
    <form className="search-form">
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
       <FiltersForm/>
    </form>
        
</div>
</>
)
}
