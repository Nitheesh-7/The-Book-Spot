import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/layouts/Navbar/navbar";
import Footer from "../../components/layouts/footer/footer";
import './searchpage.style.css'
import { BookData } from "../../util/bookdata";
import SearchResultCard from "../../components/cards/search-result-card/searchresultcard";



const SearchPage = () => {
    const location = useLocation()
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
       let searchValue = []
       searchValue = BookData.filter((data) => data.book_name.toLowerCase().includes(location.state.toLowerCase()))
       setSearchResult(searchValue)
    },[])
    


    return (
        <section>
            <Navbar darkTheme={true}/>
            <div className="search-result-container">
                <div className="container">
                    <h2>Search Results</h2>

                    {searchResult.map((result) => (
                        <SearchResultCard key={result.id} cartBook={result}/>
                    ))}
                </div>

            </div>
            <Footer/>
        </section>
    )
}

export default SearchPage