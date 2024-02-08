import React from "react";
import './productlisting.style.css'
import ProductListingCard from "../../cards/productlistingcard/productlistingcard";
import { BookData } from "../../../util/bookdata";

const ProductListing = () => {
    //  const list = console.log(BookData.slice(0,6).map((i) =>{return i}))
    return (
        <div className="product-listing-container">
            <div className="container">
               <h2>Here are some <span className="text-primary">books</span> that you might like</h2>
            
                <div className="listing-container">
                    {BookData.slice(0,4).map((book) => (
                        <ProductListingCard key={book.id} bookData={book}/>
                    ))}
                    
                     
                </div>
            </div>
        </div>
    )
}

export default ProductListing