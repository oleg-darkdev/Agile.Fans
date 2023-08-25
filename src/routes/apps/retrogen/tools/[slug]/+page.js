import { allScanariousForRetrogen } from '@appRetrogenShared';

// export async function load({ params }) {
// function findObjectById(id) {
// return new Promise((resolve, reject) => {
//   const foundObject = objects.find(obj => obj.id === id);
//   if (foundObject) {
//     resolve(foundObject);
//   } else {
//     reject(new Error("Object not found"));
//   }
// });
// }

// return {
// 	post: await db.getPost(params.slug)
// };
// }

export const load = ({ params }) => {
	function findObjectById() {
		const objectsArray = Object.values(allScanariousForRetrogen);

		return new Promise((resolve, reject) => {
			const foundObject = objectsArray.find((obj) => obj.link === params.slug);

			if (foundObject) {
				resolve(foundObject);
			} else {
				reject(new Error('Object not found'));
			}
		});
	}

  return {
    tool: findObjectById()
  };
};
