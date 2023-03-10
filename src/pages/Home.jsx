import { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../components/CardMovie";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
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
					className="cursor-pointer px-1 bg-blue-500 shadow-blue-500/50 shadow-lg rounded-md py-1 mx-1 text-white font-bold"
				>
					Now playing
				</p>
				<p
					onClick={() => handleClick("upcoming")}
					className="cursor-pointer px-1 bg-blue-500 shadow-blue-500/50 shadow-lg rounded-md py-1 mx-1 text-white font-bold"
				>
					Upcoming
				</p>
				<p
					onClick={() => handleClick("top-rated")}
					className="cursor-pointer px-1 bg-blue-500 shadow-blue-500/50 shadow-lg rounded-md py-1 mx-1 text-white font-bold"
				>
					Top rated
				</p>
				<p
					onClick={() => handleClick("popular")}
					className="cursor-pointer px-1 bg-blue-500 shadow-blue-500/50 shadow-lg rounded-md py-1 mx-1 text-white font-bold"
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
				className="max-w-sm mt-8 py-3 px-3 w-11/12 m-3 truncate leading-5 font-medium placeholder-gray-400 border-transparent text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 border-gray-600 focus:border-blue-500 rounded-md focus:outline-none bg-gray-800"
			/>
			<button
				onClick={searchMoviesButton}
				value={inputValue}
				className={`${
					inputValue === "" ? "bg-gray-500" : "bg-blue-500 shadow-blue-500/50"
				} mx-4 px-3 py-1 rounded-md text-white font-semibold shadow-lg transition
				duration-500 text-sm`}
				disabled={inputValue === ""}
			>
				Cari
			</button>
			<button
				onClick={resetsearchMovies}
				className={`${
					moviesNowPlaying.length === defaultMovieNowPlaying.length
						? "bg-gray-500"
						: "bg-red-500 shadow-red-500/50"
				} px-3 py-1 rounded-md text-white font-semibold shadow-lg text-sm`}
				disabled={moviesNowPlaying.length === defaultMovieNowPlaying.length}
			>
				Reset
			</button>
			<p
				onClick={() => navigate("/trending")}
				className="mx-3 mt-7 cursor-pointer hover:text-orange-500 text-white font-semibold"
			>
				Trending
			</p>

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
