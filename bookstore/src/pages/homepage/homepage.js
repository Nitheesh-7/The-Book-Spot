import React from "react";
import ShowCase from "../../components/layouts/showcase/showcase";
import ProductListing from "../../components/layouts/productlisting/productlisting";
import Footer from '../../components/layouts/footer/footer'
const HomePage = () => {
    return (
        <section>
            <ShowCase/>
            <ProductListing/>
            <Footer/>
        </section>
    )
}

export default HomePage