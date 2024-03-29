// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		interface Locals {
			auth: import('lucia').AuthRequest
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}

	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth
		type DatabaseUserAttributes = {
			discord_id: string
		}
		type DatabaseUserAttributes = {}
	}
}

export {}
