<script>
  import Hero from "$lib/components/Hero.svelte";
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import ArrowDown from "~icons/material-symbols/keyboard-double-arrow-down-rounded";
  import { crossfade, fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  
  let isAtTop = true;
  
  onMount(() => {
    const handleScroll = () => {
      isAtTop = window.scrollY === 0;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<!-- Add these classes to your root container (likely in app.html or layout.svelte) -->
<style>
  :global(html) {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }
</style>

<!-- Add scroll-snap-align to your sections -->
<header class="align-center flex h-screen flex-col justify-between p-4 hero scroll-snap-start">
  <div class=""></div>
  <Hero></Hero>
  <div 
    class="transition-all duration-300 text-xl self-center ease-in-out relative slide h-6"
    class:opacity-0={!isAtTop}
  >
    {#if isAtTop}
      <div
        class="animate-bounce"
        in:fly={{ x: 200, duration: 300 }}
        out:fly={{ x: -200, duration: 300 }}
      >
        <ArrowDown></ArrowDown>
      </div>
    {/if}
  </div>
</header>

<!-- Your next section -->
<section class="h-screen scroll-snap-start">
  <!-- Content -->
</section>