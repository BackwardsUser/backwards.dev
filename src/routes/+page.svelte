<script>
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import Downloads from "$lib/components/Downloads.svelte";
  import { fly } from "svelte/transition";
  import Media from "$lib/components/Media.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import TechStack from "$lib/components/TechStack.svelte";

  /* IMPORTANT */
  // Anything added into the page directly will likely break the page's scrolling behaviour
  // To properly add something to the main page, make it into a component and add it to the array.
  // This array is in order of how they are to be displayed, modifying their positions will modify them in page.

  let slides = [
    Header,
    Downloads,
    Media,
    TechStack,
    Contact
  ];


  let currentSection = 0;

  // Update the current section based on scroll position
  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    const scrollTop = document.querySelector(".scroll-container").scrollTop;
    sections.forEach((section, index) => {
      if (section.offsetTop <= scrollTop + window.innerHeight / 2) {
        currentSection = index;
      }
    });
  };
</script>

<div id="main" class="scroll-container" on:scroll={handleScroll}>
  {#each slides as content}
    <section class="section">
      <svelte:component this={content} />
    </section>
  {/each}
</div>

<!-- Tracker -->
{#if currentSection > 0}
  <div in:fly={{ x: 50, duration: 300 }} out:fly={{ x: 50, duration: 300 }} class="tracker">
    {#each slides.slice(1) as _, i}
      <div class="tracker-dot {i + 1 === currentSection ? 'active' : ''}"></div>
    {/each}
  </div>
{/if}

<style>
  .scroll-container {
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    height: 100vh;
    width: 100vw;
    scroll-behavior: smooth;
  }

  .section {
    scroll-snap-align: start;
    min-height: 100vh; /* Full viewport height */
    width: 100vw;
  }

  /* Tracker Styles */
  .tracker {
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .tracker-dot {
    width: 10px;
    height: 10px;
    @apply bg-surface-600;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  .tracker-dot.active {
    @apply bg-primary-600;
  }
</style>
