import icon from "./search-outline.svg"
import { useState } from "react";

const SearchBar = (props) => {
    const [text, setText] = useState('s');

    const handleClick = () => {
        props.handleSearch(text)
        setText('');
    }
    return (
        <div className="search_bar">
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <img
                onClick={handleClick}
                src={icon}
                alt="icon"
            />
           
        </div>
    )
}

export default SearchBar