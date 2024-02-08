import React, {useContext} from "react";
import './cartitemcard.style.css'
import { CartContext } from "../../../App";


const CartItemCard = ({cartBook}) => {

    const { cartItems, setCartItems } = useContext(CartContext)
    // console.log(cartBook)
    // console.log(cartBook.book_name)
    const handleRemove = () => {
        console.log(cartBook.id)
        setCartItems(cartItems.filter((item) => item.id !== cartBook.id))
    }

    return (
    
                <section className="cart-item">
                    <div className="cart-item-image-container">
                        <img src={cartBook.book_url} alt="cart-item-image" className="cart-item-image" />
                    </div>
                    <div className="cart-item-content-container">
                        <h2>{cartBook.book_name}</h2>
                        <p>{cartBook.author_name}</p>
                        <h3 className="cart-item-price">&#8377;{cartBook.price}</h3>
                        <button onClick={handleRemove} className="delete-button" >Remove from Cart</button>
                    </div>
                </section>
                

    )
}

export default CartItemCard