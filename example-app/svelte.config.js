import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		moduleExtensions: [".js", ".ts", ".py"] //Add this line, to resolve +server.py endpoints
	}
};

export default config;
