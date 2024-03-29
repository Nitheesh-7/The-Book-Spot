import React, { useState,  useEffect, useContext } from "react";
import './detailssection.style.css'
import BookDetailImage from '../../../assets/Booksimages/story-books-3.jpg'
import { useParams, useNavigate } from 'react-router-dom'
import { BookData } from '../../../util/bookdata'
import { CartContext, UserContext } from "../../../App";

const DetailsSection = () => {
    const { id } = useParams()
    const [ bookData , setBookData ] = useState({})

    const user = useContext(UserContext)
    const { cartItems, setCartItems } = useContext(CartContext)

    const navigate = useNavigate()

    useEffect(() => {
        let newData = BookData.filter((book) => book.id === parseInt(id))
        setBookData(newData[0])

    },[])

    const handleAddToCart = () => {
        if(user){
            //add to cart
            // console.log([...cartItems])
            setCartItems([...cartItems, bookData])
            alert(`The book ${bookData.book_name} is added to the cart. `)
        }
        else{
            navigate('/login')
            alert("Please login or signup first")
        }
    }

    return (
        <section className="detail-section-container">
                <div className="container">
                    <div className="flex-container">
                        <div className="book-image-container">
                                <img src={bookData.book_url} alt="book"/>
        
                        </div>

                        <div className="book-detail-container">
                                <h2>{bookData.book_name}</h2>
                                <p className="text-primary author">{bookData.author_name}</p>
                                <p className="book-description">{bookData.book_description}</p>
                                <p><b>Language : </b> {bookData.language}</p>
                                <p><b>Book Length : </b> {bookData.print_length}</p>
                                
                                <h3>&#8377;{bookData.price}</h3>

                                <a onClick={handleAddToCart} className="button-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default DetailsSection