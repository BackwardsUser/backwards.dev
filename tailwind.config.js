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
			themes: { preset: [
				{ name: "skeleton", enhancements: true },
				{ name: "wintry", enhancements: true },
				{ name: "modern", enhancements: true },
				{ name: "rocket", enhancements: true },
				{ name: "seafoam", enhancements: true },
				{ name: "vintage", enhancements: true },
				{ name: "sahara", enhancements: true },
				{ name: "hamlindigo", enhancements: true },
			  { name: "gold-nouveau", enhancements: true },
			  { name: "crimson", enhancements: true }
			 ]}
		})
	]
}