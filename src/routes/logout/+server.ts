import { auth } from '$lib/server/lucia.js'

export const GET = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (!session)
		return new Response(null, {
			status: 401
		})
	await auth.invalidateSession(session.sessionId)
	locals.auth.setSession(null)
	return new Response(null, {
		status: 302,
		headers: {
			Location: '/'
		}
	})
}
