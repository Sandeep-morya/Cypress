import React from "react";

const Header = (props) => {
  const handleClick = ( )=>{
    if(props.query!=="spiderman" || props.page!==1){
      props.handleSearch('spiderman')
    }
  }
  return (
    <div className="header">
      <h1 data-testid='logo' onClick={handleClick}>MoviesLand</h1>
    </div>
  );
};

export default Header;
