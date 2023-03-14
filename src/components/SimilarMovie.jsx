import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const SimilarMovie = () => {
	const [moviesSimilar, setMoviesSimilar] = useState([]);
	const movieSimilar = async () => {
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}/similar?api_key=57911a2ffbc7167c9f55348f1dd524ca`
			);
			setMoviesSimilar(res.data.results);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		movieSimilar();
	}, []);
	console.log("similarmovie:", moviesSimilar);
	const { id } = useParams();
	return (
		<>
			<Swiper
				// slidesPerView={3}
				// spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					375: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					425: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					760: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1020: {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				<div className="mt-14">
					{moviesSimilar.map((similar) => (
						<SwiperSlide>
							<div key={similar.id}>
								<img
									className="mt-8 rounded-md flex inline-flex"
									src={`https://image.tmdb.org/t/p/w500/${similar.poster_path}`}
									alt=""
								/>
								<div className="text-white mt-1">
									<p className="text-sm font-semibold">{similar.title}</p>
									{/* <p className="text-sm">Rilis: {similar.release_date}</p>
									<p className="text-sm">Populer: {similar.popularity}</p>
									<p className="text-sm">Rating: {similar.vote_average}</p> */}
								</div>
							</div>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</>
	);
};

export default SimilarMovie;
