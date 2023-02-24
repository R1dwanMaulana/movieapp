import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";

const Detail = () => {
	const [details, setDetails] = useState([]);
	const fetchData = async () => {
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=57911a2ffbc7167c9f55348f1dd524ca`
			);
			setDetails(res.data);
			// console.log(res.data.title);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	console.log(details);

	// console.log(useParams());
	const { id } = useParams();
	return (
		<div className="mx-8 my-14">
			<CardDetail detail={details} />
		</div>
	);
};

export default Detail;
