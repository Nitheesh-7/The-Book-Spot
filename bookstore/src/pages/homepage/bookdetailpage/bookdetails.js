import React from "react";
import Navbar from '../../../components/layouts/Navbar/navbar'
import DetailsSection from "../../../components/layouts/details-section/detailssection";
import Footer from '../../../components/layouts/footer/footer'

const BookDetails = () => {
    return (
        <section>
            <Navbar darkTheme= {true}/>

            <DetailsSection/>
            <Footer/>
        </section>
    )
}

export default BookDetails