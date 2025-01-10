<script>
	import Hero from '$lib/components/Hero.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import ArrowDown from '~icons/material-symbols/keyboard-double-arrow-down-rounded';
	import { crossfade, fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isAtTop = true;

  onMount(() => {
    const handleScroll = () => {
      isAtTop = window.scrollY === 0;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class="align-center flex h-screen flex-col justify-between p-4">
  <div class=""></div>
  <Hero></Hero>
  <div 
    class="transition-all duration-300 text-xl self-center ease-in-out relative"
    style="transform: translateX({isAtTop ? '0px' : '-200px'})"
    class:opacity-0={!isAtTop}
  >
    <div class="animate-bounce">
      <ArrowDown></ArrowDown>
    </div>
  </div>
</header>
