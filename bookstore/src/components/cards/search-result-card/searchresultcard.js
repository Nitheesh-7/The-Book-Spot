import React, {useContext} from "react";
import './searcheresultcard.style.css'
import { Link } from "react-router-dom";



const SearchResultCard = ({cartBook}) => {

    
    return (
    
                <section className="cart-item">
                    <div className="cart-item-image-container">
                        <img src={cartBook.book_url} alt="cart-item-image" className="cart-item-image" />
                    </div>
                    <div className="cart-item-content-container">
                        <h2>{cartBook.book_name}</h2>
                        <p>{cartBook.author_name}</p>
                        {/* <h3 className="cart-item-price">&#8377;{cartBook.price}</h3> */}
                        {/* <button onClick={handleRemove} className="delete-button" >Remove from Cart</button> */}
                        <Link to={`/book-details/${cartBook.id}`} className="button-primary">Product Details</Link>
                    </div>
                </section>
                

    )
}

export default SearchResultCard