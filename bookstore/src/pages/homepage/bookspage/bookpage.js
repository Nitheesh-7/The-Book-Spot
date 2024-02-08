import React from "react";
import Navbar from '../../../components/layouts/Navbar/navbar'
import SearchInputForm from "../../../components/forms/searchinputform/searchinputform";
import './bookpage.style.css'
import ProductListingAll from "../../../components/layouts/productlistingall/productlistingall";
import Footer from '../../../components/layouts/footer/footer'

const BooksPage = () => {
    return (
        <section>
            <Navbar darkTheme={true}/>

            <div className="search-container">
                <h2>Find the <span className="text-primary">Books</span> that you want</h2>
                <SearchInputForm darkTheme={false} />
            </div>

            <ProductListingAll/>
            <Footer/>
        </section>
    )
}

export default BooksPage