/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.html'],
	theme: {
		extend: {
			colors: {
				amber: 'hsl(38, 63%, 58%)',
				coral: 'hsl(20, 64%, 65%)',
				'pale-yellow': 'hsl(42, 73%, 85%)',
				'dark-slate': 'hsl(33, 52%, 28%)',
				charcoal: 'hsl(0, 0%, 20%)',
			},
			screens: {
				tablet: '768px',
				desktop: '1024px',
			},
			spacing: {
				128: '32rem',
				144: '36rem',
				screen_130: 'calc(100vh - 130px)',
			},
		},
	},
	plugins: [],
}
