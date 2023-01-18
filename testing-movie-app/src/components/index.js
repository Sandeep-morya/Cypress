export {default as Header} from "./Header"
export {default as Loader} from "./Loader"
export {default as MovieCard} from "./MovieCard"
export { default as MoviesList } from "./MoviesList";
// export {default as Navbar} from "./Navbar"
export {default as Pagination} from "./Pagination"
export {default as Error} from "./Error"
export {default as SearchBar} from "./SearchBar"

export const genre = [
	{ id: 28, name: "Action" },
	{ id: 12, name: "Adventure" },
	{ id: 16, name: "Animation" },
	{ id: 35, name: "Comedy" },
	{ id: 80, name: "Crime" },
	{ id: 99, name: "Documentary" },
	{ id: 18, name: "Drama" },
	{ id: 10751, name: "Family" },
	{ id: 14, name: "Fantasy" },
	{ id: 36, name: "History" },
	{ id: 27, name: "Horror" },
	{ id: 10402, name: "Music" },
	{ id: 9648, name: "Mystery" },
	{ id: 10749, name: "Romance" },
	{ id: 878, name: "Science Fiction" },
	{ id: 10770, name: "TV Movie" },
	{ id: 53, name: "Thriller" },
	{ id: 10752, name: "War" },
	{ id: 37, name: "Western" },
];
 export  const getGenre = (genre, idsArray) => {
		let bag = [];
		for (let x of idsArray) {
			for (let obj of genre) {
				if (obj.id === x) {
					bag.push(obj.name);
				}
			}
		}
		return bag.join(" - ");
 };

export const URL = `https://api.themoviedb.org/3/search/movie`;
export const api_key = `d07a0aca26cbc2a87b8db46242e46675`;