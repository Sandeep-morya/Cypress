import axios from "axios"
import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Header, Pagination, Loader, URL, api_key, MoviesList, Error, SearchBar } from "./components";

export default function App() {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const totalRef = useRef(1);
  const searchRef = useRef('Spiderman');

  const handleSearch = (label) => {
    moviesList(label);
    searchRef.current = label;
    setPage(1)
  }

  const moviesList = async (query, page = 1) => {
    setIsLoading(true);
    try {
      const options = {
        params: { api_key, query, page }
      }
      const { data } = await axios.get(URL, options)
      setList(data.results)
      totalRef.current = data.total_pages;
      setIsLoading(false);
      setIsError(false);

      if (data.total_results === 0) {
        setIsError(true);
      }

    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    moviesList(searchRef.current, page);
  }, [page]);

  return (
    <div className="main">
      <Header {...{ query: searchRef.current, page, handleSearch }} />

      <SearchBar {...{ handleSearch }} />

      {isLoading ? <Loader /> : isError ? <Error /> : <MoviesList {...{ list }} />}

      <Pagination total={totalRef.current} {...{ page, setPage }} />
    </div>
  );
}
