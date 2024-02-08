import React from "react";
import './showcase.styles.css'
import Navbar from "../Navbar/navbar";
import SearchInputForm from "../../forms/searchinputform/searchinputform";

const ShowCase = () => {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>

            <div className="overlay"></div>
            <div className="showcase-content">
            <h1>Best  <span className="text-primary"> Books  </span> Available</h1>
            <p>Buy Quality books at cheaper price</p>
            <SearchInputForm darkTheme={true}/>
            </div>
    </section>
    )
}

export default ShowCase