import icon from "./search-outline.svg"
import { useState } from "react";

const SearchBar = (props) => {
    const [text, setText] = useState();

    const handleClick = () => {
        props.handleSearch(text)
        setText('');
    }
    return (
        <div className="search_bar">
            <input 
            placeholder="Enter Movie Name eg: 'Spiderman' "
            value={text} 
            onChange={(e) => setText(e.target.value)} />
            <img
                onClick={handleClick}
                src={icon}
                alt="icon"
            />
           
        </div>
    )
}

export default SearchBar