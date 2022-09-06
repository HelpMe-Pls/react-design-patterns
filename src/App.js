import axios from 'axios';
import { DataSource } from './DataSource';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';

const getServerData = url => async () => {
	const response = await axios.get(url);
	return response.data;
}

const getLocalStorageData = key => () => {
	return localStorage.getItem(key);
}

// Manually add the "message" key to the localStorage (by opening DevTools)
const Text = ({ message }) => <h1>{message}</h1>;

function App() {
	return (
		<>
		<DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
			<UserInfo />
		</DataSource>
		<DataSource getDataFunc={getServerData('/products/3456')} resourceName="item">
			<ProductInfo />
		</DataSource>
		<DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
			<Text />
		</DataSource>
		</>
	);
}

export default App;
