import React from 'react';

const SearchBox = ({ searchSubmit }) => {
  return (
    <div className='pa2'>
        <form onSubmit = {searchSubmit}>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search organizations'
            />
            <button type="submit">Search</button>
        </form>
    </div>
  );
}

export default SearchBox;