import { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../components/CardMovie";

const Home = () => {
	const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
	const [moviesUpComing, setMoviesUpComing] = useState([]);
	const [moviesTopRated, setMoviesTopRated] = useState([]);
	const [moviesPopular, setMoviesPopular] = useState([]);
	const [showMovieNowPlaying, setShowMovieNowPlaying] = useState(true);
	const [showMovieUpComing, setShowMovieUpComing] = useState(false);
	const [showMovieTopRated, setShowMovieTopRated] = useState(false);
	const [showMoviePopular, setShowMoviePopular] = useState(false);
	const [inputValue, setinputValue] = useState("");
	// const [searchButtonMovie, setSearchButtonMovie] = useState("");
	const [defaultMovieNowPlaying, setDefaultMovieNowPlaying] = useState([]);
	const [defaultMovieUpComing, setDefaultMovieUpComing] = useState([]);
	const [defaultMovieTopRated, setDefaultMovieTopRated] = useState([]);
	const [defaultMoviePopular, setDefaultMoviePopular] = useState([]);

	const searchMovies = (e) => {
		console.log(e.target.value);
		setinputValue(e.target.value);
		// if (showMovieNowPlaying) {
		// 	const updatedMovieNowPlaying = defaultMovieNowPlaying.filter((movie) =>
		// 		movie.title.toLowerCase().includes(e.target.value.toLowerCase())
		// 	);
		// 	setMoviesNowPlaying(updatedMovieNowPlaying);
		// }
		if (showMovieUpComing) {
			const updatedMovieUpComing = defaultMovieUpComing.filter((movie) =>
				movie.title.toLowerCase().includes(e.target.value.toLowerCase())
			);
			setMoviesUpComing(updatedMovieUpComing);
		}
		if (showMovieTopRated) {
			const updatedMovieTopRated = defaultMovieTopRated.filter((movie) =>
				movie.title.toLowerCase().includes(e.target.value.toLowerCase())
			);
			setMoviesTopRated(updatedMovieTopRated);
		}
		if (showMoviePopular) {
			const updatedMoviePopular = defaultMoviePopular.filter((movie) =>
				movie.title.toLowerCase().includes(e.target.value.toLowerCase())
			);
			setMoviesPopular(updatedMoviePopular);
		}
	};

	const searchMoviesButton = () => {
		if (showMovieNowPlaying) {
			const updatedMovieNowPlaying = defaultMovieNowPlaying.filter((movie) =>
				movie.title.toLowerCase().includes(inputValue.toLowerCase())
			);
			setMoviesNowPlaying(updatedMovieNowPlaying);
		}
	};

	const resetsearchMovies = () => {
		setinputValue("");
		if (showMovieNowPlaying) {
			setMoviesNowPlaying(defaultMovieNowPlaying);
		}
	};
	const fetchData = async (slug) => {
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/${slug}?api_key=57911a2ffbc7167c9f55348f1dd524ca`
			);
			if (slug === "now_playing") {
				setMoviesNowPlaying(res.data.results);
				setDefaultMovieNowPlaying(res.data.results);
			}
			if (slug === "upcoming") {
				setMoviesUpComing(res.data.results);
				setDefaultMovieUpComing(res.data.results);
			}
			if (slug === "top_rated") {
				setMoviesTopRated(res.data.results);
				setDefaultMovieTopRated(res.data.results);
			}
			if (slug === "popular") {
				setMoviesPopular(res.data.results);
				setDefaultMoviePopular(res.data.results);
			}

			// console.log(res.data.results[0]);
		} catch (err) {
			console.log(err);
		}
	};

	const handleClick = (movieType) => {
		if (movieType === "now-playing") {
			setShowMovieNowPlaying(true);
			setShowMovieUpComing(false);
			setShowMovieTopRated(false);
			setShowMoviePopular(false);
		}
		if (movieType === "upcoming") {
			setShowMovieNowPlaying(false);
			setShowMovieUpComing(true);
			setShowMovieTopRated(false);
			setShowMoviePopular(false);
		}
		if (movieType === "top-rated") {
			setShowMovieNowPlaying(false);
			setShowMovieUpComing(false);
			setShowMovieTopRated(true);
			setShowMoviePopular(false);
		}
		if (movieType === "popular") {
			setShowMovieNowPlaying(false);
			setShowMovieUpComing(false);
			setShowMovieTopRated(false);
			setShowMoviePopular(true);
		}
	};

	useEffect(() => {
		fetchData("now_playing");
		fetchData("upcoming");
		fetchData("top_rated");
		fetchData("popular");
	}, []);
	// console.log(movies);

	return (
		<>
			<div className="flex inline-flex mt-10 mx-2 text-sm">
				<p
					onClick={() => handleClick("now-playing")}
					className="cursor-pointer px-2 bg-rose-500 rounded-md py-1 mx-1 text-white"
				>
					Now playing
				</p>
				<p
					onClick={() => handleClick("upcoming")}
					className="cursor-pointer px-2 bg-rose-500 rounded-md py-1 mx-1 text-white"
				>
					Upcoming
				</p>
				<p
					onClick={() => handleClick("top-rated")}
					className="cursor-pointer px-2 bg-rose-500 rounded-md py-1 mx-1 text-white"
				>
					Top rated
				</p>
				<p
					onClick={() => handleClick("popular")}
					className="cursor-pointer px-2 bg-rose-500 rounded-md py-1 mx-1 text-white"
				>
					Popular
				</p>
			</div>
			<input
				onChange={searchMovies}
				value={inputValue}
				type="search"
				placeholder="Cari film"
				// onKeyup="getMovie"
				className="max-w-sm mt-8 py-3 px-3 w-11/12 m-3 truncate leading-5 font-medium border-transparent text-gray-800 rounded-lg bg-gray-100 shadow-md"
			/>
			<button
				onClick={searchMoviesButton}
				value={inputValue}
				className={`${
					inputValue === "" ? "bg-gray-200" : "bg-cyan-400"
				} mx-4 px-4 py-2 rounded-lg text-white font-semibold shadow-md transition
				duration-500`}
				disabled={inputValue === ""}
			>
				Cari
			</button>
			<button
				onClick={resetsearchMovies}
				className={`${
					moviesNowPlaying.length === defaultMovieNowPlaying.length
						? "bg-gray-200"
						: "bg-red-500"
				} px-4 py-2 rounded-lg text-white font-semibold shadow-md`}
				disabled={moviesNowPlaying.length === defaultMovieNowPlaying.length}
			>
				Reset
			</button>
			<div className="mx-8 mt-14 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-12">
				{showMovieNowPlaying &&
					moviesNowPlaying.map((movie) => (
						<div key={movie.id}>
							<CardMovie movie={movie} />
						</div>
					))}
				{showMovieUpComing &&
					moviesUpComing.map((movie) => (
						<div key={movie.id}>
							<CardMovie movie={movie} />
						</div>
					))}
				{showMovieTopRated &&
					moviesTopRated.map((movie) => (
						<div key={movie.id}>
							<CardMovie movie={movie} />
						</div>
					))}
				{showMoviePopular &&
					moviesPopular.map((movie) => (
						<div key={movie.id}>
							<CardMovie movie={movie} />
						</div>
					))}
			</div>
		</>
	);
};

export default Home;
