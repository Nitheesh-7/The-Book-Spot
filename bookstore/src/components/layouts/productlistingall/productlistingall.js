import React from "react";
import './productlistingall.style.css'
import ProductListingCard from '../../cards/productlistingcard/productlistingcard'
import { BookData } from "../../../util/bookdata";

const ProductListingAll = () => {
    return (
        <section className="product-listing-all-container">
            <div className="container">
                <div className="grid-container">
                    {BookData.map((book) => {
                        return (
                            <div  key={book.id} className="grid-item">
                            <ProductListingCard bookData={book}/>
                        </div>
                    )
                    })}

                    
                </div>
            </div>
        </section>
    )
}

export default ProductListingAll