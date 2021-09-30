import React from 'react';
import './searchBox.styles.css';

const SearchBox = ({ searchSubmit }) => {
  return (
        <form style={{width:"40%", margin:"auto"}} onSubmit = {searchSubmit}>
            <input
                className='search-box'
                type='search'
                placeholder='search organizations'
            />
            <div>
            <button className="square_btn" type="submit">Search</button>
            </div>
        </form>
  );
}

export default SearchBox;