import React, { useContext } from 'react'
import './navbar.styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from "../../../App"
import { ReactComponent as Cart } from '../../../assets/cart.svg'
import { getAuth, signOut } from 'firebase/auth'
import app from '../../../firebase/firebase'

const Navbar = ({darkTheme, darkText}) => {

  const user = useContext(UserContext)
  const auth = getAuth(app)
  const navigate = useNavigate()

  const handleLogout = () =>{
    signOut(auth).then(() => {
        navigate('/')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const showLoginAndSignup = (
    <nav className='nav-links-container'>
                    <Link to="/" className={` ${darkText ? 'nav-links-dark' : 'nav-links'}`}>Home</Link>
                    <Link to="/books" className={` ${darkText ? 'nav-links-dark' : 'nav-links'}`}>Books</Link>
                    <Link to="/login" className={` ${darkText ? 'nav-links-dark' : 'nav-links'}`}>Login</Link>
                    <Link to="/signup" className={` ${darkText ? 'nav-links-dark' : 'nav-links'}`}>SignUp</Link>
                     
    </nav>
  )

  const showLogoutAndCart = (
    <nav className='nav-links-container'>
                    <Link to="/" className={` ${darkText ? 'nav-links-dark' : 'nav-links'}`}>Home</Link>
                    <Link to="/books" className={` ${darkText ? 'nav-links-dark' : 'nav-links'}`}>Books</Link>
                    <a onClick={handleLogout} className={` ${darkText ? 'nav-links-dark' : 'nav-links'}`}>Logout</a>
                    <Link to="/cart"className='cart-link'><Cart/></Link>
                    
    </nav>
  )


    return (
       <section className= {`navbar-container ${ darkTheme ? 'background-dark relative ' : 'background-transparent'}`} >
              <div className='container flex justify-center justify-between align-center'>
                <a href='#' className='logo'>The <span className='text-primary'><b>Book</b> </span> Store <p>-"A bookstore is a world of endless possibilities."</p></a>
                

                {user ? showLogoutAndCart : showLoginAndSignup }
              </div>
       </section>
    )
}

export default Navbar