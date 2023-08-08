export const load = ({ locals }) => {

  console.log(locals);
	if (locals.user) {
		return {
			user: locals.user
		};
	}

	return {
		user: undefined
	};
};
