/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.stanislav-lyu.dev',
	generateRobotsTxt: true,
	sitemapSize: 7000,
}
