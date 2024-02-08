import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import app from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomePage from "./pages/homepage/homepage";
import BooksPage from "./pages/homepage/bookspage/bookpage";
import BookDetails from "./pages/homepage/bookdetailpage/bookdetails";
import Login from "./pages/loginpage/login";
import SignUp from "./pages/signuppage/signup";
import CartPage from "./pages/cartpage/cartpage";
import ScrollToTop from "./components/util/scrolltotop";
import SearchPage from "./pages/searchpage/searchpage";

export const UserContext = createContext({})
export const CartContext = createContext([])

const App = () => {
    const auth = getAuth(app)
    const [authenticatedUser, setAuthenticatedUser] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [totalAmount, setTotalAmount ] = useState(0)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthenticatedUser(user)
            }
            else{
                setAuthenticatedUser(null)
            }
        })
    },[])

    useEffect(() => {
        let total = 0
        cartItems.forEach((item) => {
            // console.log(item.price)
            total += parseInt(item.price)
            // console.log(total)
        })

        setTotalAmount(total)
    },[cartItems])

    return(
        <ScrollToTop>
            <UserContext.Provider value = {authenticatedUser}>
                <CartContext.Provider value={{cartItems,totalAmount, setCartItems}}>
                    <Routes>
                        <Route path="/" element = {<HomePage/>}/>
                        <Route path="/books" element = {<BooksPage/>}/>
                        <Route path="/search" element= {<SearchPage/>} />
                        <Route path="/book-details/:id" element = {<BookDetails/>}/>
                        <Route path="/signup" element= {<SignUp/>}/>
                        <Route path="/login" element= {<Login/>}/>
                        <Route path="/cart" element= {<CartPage/>}/>
                     </Routes>
                 </CartContext.Provider>
            </UserContext.Provider>
        </ScrollToTop>
       
    )
}


export default App