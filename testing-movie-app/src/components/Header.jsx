import React from "react";

const Header = (props) => {
  const handleClick = ( )=>{
    if(props.query!=="Spiderman" || props.page!==1){
      props.handleSearch('Spiderman')
    }
  }
  return (
    <div className="header">
      <h1 onClick={handleClick}>MoviesLand</h1>
    </div>
  );
};

export default Header;
