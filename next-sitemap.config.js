module.exports = {
    siteUrl: process.env.SITE_URL || 'https://sprunkilily.com',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 1000,
    exclude: ['/server-sitemap-index.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://sprunkilily.com/server-sitemap-index.xml', // <==== Add here
      ],
    },
  }
