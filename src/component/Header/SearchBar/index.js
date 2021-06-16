import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';

import "./styles.scss"

const SearchBar = ({setOnSearchClass, onSearchClass}) => {
    return (
        <div className={onSearchClass}>
            <input placeholder="Buscar en nuestra tienda" type="text" name="serach"/>
            <AiOutlineSearch />
            <AiOutlineClose onClick={() => setOnSearchClass('header-open-search-close')}/>
        </div>
    )
}

export default SearchBar
