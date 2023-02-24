import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
	return (
		<div>
			<Link to={`/${movie.id}`}>
				<img
					className="w-50 rounded-xl flex inline-flex"
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt=""
				/>
				<div className="text-white mt-1">
					<p className="text-md font-semibold">{movie.title}</p>
					<p className="text-sm">Rilis: {movie.release_date}</p>
					<p className="text-sm">Populer: {movie.popularity}</p>
					<p className="text-sm">Rating: {movie.vote_average}</p>
				</div>
			</Link>
		</div>
	);
};

export default CardMovie;
