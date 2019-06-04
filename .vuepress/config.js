module.exports = {
  base: "/",
  title: 'Write the Docs | Dallas',
  description: 'A place for Write the Docs | Dallas to live on the internet.',
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
  },
  themeConfig: {
		search: false,
		lastUpdated: 'Last Updated',
		nav: [
      { text: 'About', link: '/docs/about/' },
      { text: 'Articles', link: '/docs/articles/' },
			{ text: 'Contribute', link: '/docs/contribute/' },
      { text: 'Events', link: '/docs/events/' },
      { text: 'Jobs', link: '/docs/jobs/' }
		],
	},
}