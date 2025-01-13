<script>
	import '../app.css';
	import { autoModeWatcher } from '@skeletonlabs/skeleton';

	let { children } = $props();
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>
{@render children()}