export const ProductInfo = ({ item }) => {
	const { name, price, description, rating } = item || {};

	return item ? (
		<>
		<h3>{name}</h3>
		<p>{price}</p>
		<h3>Description:</h3>
		<p>{description}</p>
		<p>Average Rating: {rating}</p>
		</>
	) : <p>Loading...</p>;
}