import { useState, useEffect } from 'react';
import axios from 'axios';

export const serverResource = resourceUrl => async () => {
	const response = await axios.get(resourceUrl);
	return response.data;
}

export const useDataSource = getResourceFunc => {
	const [resource, setResource] = useState(null);

	useEffect(() => {
		(async () => {
			const result = await getResourceFunc();
			setResource(result);
		})();
	}, [getResourceFunc]);

	return resource;
}
