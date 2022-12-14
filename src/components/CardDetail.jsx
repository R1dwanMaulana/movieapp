import { Link } from "react-router-dom";

const CardDetails = ({ detail }) => {
	return (
		<>
			<div>
				<Link to="/">
					<p className="mb-6 py-1 bg-rose-500 rounded-md w-16 px-1 text-white shadow-md">
						kembali
					</p>
				</Link>
			</div>
			<div className="lg:max-w-6xl lg:mx-auto sm:max-w-xl sm:mx-3 flex">
				<img
					className="shadow-2xl lg:w-36 lg:max-h-96 w-36 h-52 rounded-xl flex inline-flex"
					src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
					alt=""
				/>
				<div className="px-5">
					<p className="lg:text-4xl text-lg font-semibold">{detail.title}</p>
					<div className="lg:text-lg text-sm lg:mt-8 mt-3">
						<p>
							<span className="font-semibold">Tanggal rilis </span>:
							{detail.release_date}
						</p>
						<p>
							<span className="font-semibold">Populer</span> {detail.popularity}
						</p>
						<p>
							<span className="font-semibold">Rating</span>:{" "}
							{detail.vote_average}
						</p>
					</div>
				</div>
			</div>
			<p className="mt-6 lg:max-w-6xl lg:mx-auto sm:max-w-xl sm:mx-3">
				<span className="font-semibold">Sinopsis</span>: {detail.overview}
			</p>
		</>
	);
};

export default CardDetails;
