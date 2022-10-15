import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'
import SearchIcon from '../../icon/search-icon.svg'

export const SearchBar = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleInput = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault()
        onSubmit(searchQuery)
        setSearchQuery('')  
    }
        
    return (
            
             <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={(e) => handleSubmit(e)}>
        <button type="submit" className={css.SearchForm_button}>
            <img src={SearchIcon} alt="Search icon" />
        </button>

        <input
            className={css.SearchForm_input}
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleInput}
            value={searchQuery}
                        
        />
    </form>
    </header>
        )
}
SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
