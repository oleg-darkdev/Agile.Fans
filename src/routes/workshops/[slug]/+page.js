import { workshopsList } from '@agileFansLandingShared';

export const load = ({ params }) => {
	function findObjectById() {
		const objectsArray = Object.values(workshopsList);

		return new Promise((resolve, reject) => {
			const foundObject = objectsArray.find((obj) => obj.date === params.slug);

			if (foundObject) {
				resolve(foundObject);
			} else {
				reject(new Error('Object not found'));
			}
		});
	}

	return {
		workshopData: findObjectById()
	};
};
