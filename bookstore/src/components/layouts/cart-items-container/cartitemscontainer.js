import React, {useContext} from "react";
import './cartitemscontainer.style.css'
import CartItemCard from "../../cards/cart-item-card/cartitemcard";
import { CartContext } from '../../../App'
import StripeCheckout from 'react-stripe-checkout'
import { useNavigate } from "react-router-dom";

const CartItemsContainer = () => {
    const  {cartItems, totalAmount}   = useContext(CartContext)
    const navigate = useNavigate()
    const stripeKey=
    "pk_test_51OPgb9SFtFKHzPsNSNAGRfn7zHPnkoqMiXwGWPF2GpaFvHvdXxrKkAWQ8hXSWDF6SvYZd3966WQpfkEpn55inhzS00xcKb5JzR"
    const onToken = (token) => {
        console.log(token)
        alert("Your payment has been processed.")
        navigate('/books')
    }
    

    return (
        <section className="cart-items-container">
            <div className="container">
               {totalAmount === 0 ? (
                    <h2>Currently your cart is empty</h2>

               ):(
                   <React.Fragment>
                      <h2>Cart</h2>
                
              
                        {cartItems.map((item) => (
                        <CartItemCard  key={item.id} cartBook={item} />
                ))}

                         <h2 className="total">Total Amount = &#8377;{totalAmount}</h2>

                        
                        <StripeCheckout
                        name=" Checkout"
                        description="Please fill in the details below"
                        amount={totalAmount *100}
                        currency="INR"
                        stripeKey={stripeKey}
                        token={onToken}
                        billingAddress
                        >
                            <button className="button-primary">Checkout</button>
                        </StripeCheckout>
           
                    </React.Fragment>
               )}
               
            </div>
        </section>
    )
}

export default CartItemsContainer