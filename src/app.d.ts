// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}

	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth
		type DatabaseUserAttributes = {
			discord_id: string
		}
		type DatabaseUserAttributes = {}
	}
}

export {}
