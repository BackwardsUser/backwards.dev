<script>
  import { onMount } from "svelte";
  import Large from "$lib/components/pages/Large.svelte";
  import Small from "$lib/components/pages/Small.svelte";

  export let data;

  let width = 0;

  onMount(() => {
    const updateWidth = () => {
      width = window.innerWidth;
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  });
</script>

<div id="page-wrapper">
  {#if width >= 768}
    <Large {data} />
  {:else}
    <Small {data} />
  {/if}
</div>