import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { isoImport } from 'vite-plugin-iso-import';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		appDir: 'internal',
		vite: { plugins: [isoImport()] }
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
