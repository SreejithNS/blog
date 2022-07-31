/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.SITE_URL || 'https://sreejithofficial.in',
  generateRobotsTxt: true, // (optional)
  exclude: ['/admin']
}

module.exports = config