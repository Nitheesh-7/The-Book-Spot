import React,{useState} from 'react'
import './searchinput.style.css' 
import { useNavigate } from 'react-router-dom'

const SearchInputForm = ({darkTheme}) => {
    const [searchField, setSearchField] = useState("")
    const navigate = useNavigate()

    const handleChange = (event) => {
        setSearchField(event.target.value)
        // console.log(event.target.value)
    }

    const redirectToSearch = () => {
        if(searchField === ''){
            alert("Search Field is empty.")
        }
        else{
            navigate('/search', {state:searchField})
        }
    }

    return (
        <div className={` search-input-form-container ${darkTheme ? 'dark-box-shadow' : 'light-box-shadow'} `}>
            <input type='text' 
            className='search-input' 
            placeholder='Search Books' 
            value={searchField}
            onChange={handleChange}
            />
            <button onClick={redirectToSearch} className='search-button'>Search</button>
        </div>
    )
}

export default SearchInputForm