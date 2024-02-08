import React from "react";
import Navbar from "../../components/layouts/Navbar/navbar";
import Footer from "../../components/layouts/footer/footer";
import CartItemsContainer from "../../components/layouts/cart-items-container/cartitemscontainer";


const CartPage = () => {
    return (
        <section>
            <Navbar darkTheme={true}/>

            <CartItemsContainer/>

            <Footer/>
        </section>
    )
}

export default CartPage