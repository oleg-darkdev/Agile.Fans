import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request,locals }) => {
		const body = Object.fromEntries(await request.formData());

		const { data, error: err } = await locals.sb.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string,
			// options: {
			// 	emailRedirectTo: `${url.origin}/auth/callback`
			// }
		});

		// console.log(data);
		// console.log(err);

		if (err) {
			console.log('erro');
			if (err instanceof AuthApiError && err.status === 400) {
				console.log('Invalid credentials');
				return fail(400, {
					error: 'Invalid credentials'
				});
			}
			return fail(500, {
				message: 'Server error. Try again later.'
			});
		}

		throw redirect(303, '/demo');
	}
};
