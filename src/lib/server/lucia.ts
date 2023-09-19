import { dev } from '$app/environment'
import { prisma } from '@lucia-auth/adapter-prisma'
import { PrismaClient } from '@prisma/client'
import { lucia } from 'lucia'
import { sveltekit } from 'lucia/middleware'
import { discord } from '@lucia-auth/oauth/providers'
import { DISCORD_ID, DISCORD_SECRET, CALLBACK_URL } from '$env/static/private'

const client = new PrismaClient()

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	adapter: prisma(client),
	middleware: sveltekit(),

	getUserAttributes: (data) => {
		return {
			discordUserId: data.discord_id
		}
	}
})

export const discordAuth = discord(auth, {
	clientId: DISCORD_ID,
	clientSecret: DISCORD_SECRET,
	redirectUri: CALLBACK_URL,
	scope: ['guilds', 'guilds.members.read']
})
