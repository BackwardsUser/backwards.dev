import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import { join } from 'node:path';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: [
		'./src/**/*.{html,js,svelte}',
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		skeleton({
			themes: { preset: [ "skeleton", "wintry", "modern", "rocket", "seafoam", "vintage", "sahara", "hamlindigo", "gold-nouveau", "crimson" ]}
		})
	]
}