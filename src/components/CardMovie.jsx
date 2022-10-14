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
				<div>
					<p className="text-md font-semibold">Judul: {movie.title}</p>
					<p className="text-sm">Tanggal rilis: {movie.release_date}</p>
					<p className="text-sm">Populer: {movie.popularity}</p>
					<p className="text-sm">Rating: {movie.vote_average}</p>
				</div>
			</Link>
		</div>
	);
};

export default CardMovie;
