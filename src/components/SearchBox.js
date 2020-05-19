import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input
            className='pa3 ba p--green bg-light-green'
            type='search' placeholder='search my friends'
            onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;