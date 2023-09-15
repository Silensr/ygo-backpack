import { dev } from '$app/environment'
import { prisma } from '@lucia-auth/adapter-prisma'
import { PrismaClient } from '@prisma/client'
import { lucia } from 'lucia'
import { sveltekit } from 'lucia/middleware'
import { discord } from '@lucia-auth/oauth/providers'
import { DISCORD_APP_ID, DISCORD_APP_SECRET } from '$env/static/private'
import { hostname } from 'os'

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
	clientId: DISCORD_APP_ID,
	clientSecret: DISCORD_APP_SECRET,
	redirectUri: hostname() + '/login/discord/callback',
	scope: ['identify', 'guilds', 'guilds.member.read']
})
