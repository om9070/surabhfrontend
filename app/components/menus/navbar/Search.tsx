import React from 'react'
import { FaSearch } from 'react-icons/fa'


const Search = () => {
    return (
        <div className="relative flex w-[180px] h-[33px] border-b border-gray">
            <input type="text" className="font-din_medium text-gray
                     bg-lightGray border-none outline-none w-[180px]" placeholder="Search" />

            <FaSearch className="absolute text-gray md:left-[160px]" />

        </div>
    )
}

export default Search