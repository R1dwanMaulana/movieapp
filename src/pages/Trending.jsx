import { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../components/CardMovie";
import { Link } from "react-router-dom";

const Trending = () => {
	const [moviesTrending, setMoviesTrending] = useState([]);
	const movieTrendAPI = async () => {
		const res = await axios.get(
			`https://api.themoviedb.org/3/trending/movie/day?api_key=57911a2ffbc7167c9f55348f1dd524ca`
		);
		setMoviesTrending(res.data.results);
	};
	useEffect(() => {
		movieTrendAPI();
	});
	return (
		<>
			<div className="mt-10 mx-4">
				<Link to="/">
					<span class="flex mb-5 text-sm text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</span>
				</Link>
				<p className="font-bold text-lg text-white">Movie Trending on Day</p>
			</div>
			<div className="mx-8 mt-14 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-12">
				{moviesTrending.map((movie) => (
					<div key={movie.id}>
						<CardMovie movie={movie} />
					</div>
				))}
			</div>
		</>
	);
};

export default Trending;
