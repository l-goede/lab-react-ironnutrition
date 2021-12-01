import React from 'react';

function Search(props) {
  const { btnSearch } = props;
  return (
    <div>
      <input type="text" placeholder="Search food" onChange={btnSearch} />
    </div>
  );
}

export default Search;
