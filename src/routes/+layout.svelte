<!-- test -->
<script>
	import '../app.css';
	import { autoModeWatcher } from '@skeletonlabs/skeleton';

	import "@fontsource/abril-fatface";
	import "@fontsource/inter";
	import "@fontsource/playfair-display";
	import "@fontsource/quicksand";
	import "@fontsource/space-grotesk";

	let { children } = $props();
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>
{@render children()}