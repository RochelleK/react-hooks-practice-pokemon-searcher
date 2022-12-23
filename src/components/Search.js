import React from "react";

function Search({setSearchWord}) {

  const showSearch = (e)=>{
    console.log(e.target.value)
    setSearchWord(e.target.value) 
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={showSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
