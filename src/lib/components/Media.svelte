<script>
  import MaterialSymbolsArrowForwardRounded from "~icons/material-symbols/arrow-forward-rounded";
  import MaterialSymbolsLabProfileOutline from '~icons/material-symbols/lab-profile-outline';

  let mediaPageOnline = false;

</script>

<div class="w-screen h-screen flex flex-col justify-center items-center">
  <h2 class="h2 font-bold">Backwards Media</h2>
  <h3 class="h3">Upload and Share Media with your Friends</h3>
  <div class="flex flex-row controls pt-4 gap-12">
    <a href={mediaPageOnline ? "https://media.backwards.dev/" : ""} class="btn variant-filled-primary cool-hover opacity-50 cursor-not-allowed">
      <span>Try it out</span>
      <span class="effect duration-500 ease-in-out rounded-xl"><MaterialSymbolsArrowForwardRounded /></span>
    </a>
    <a href="/about#media" class="btn variant-ghost-surface cool-hover">
      <span>Learn more</span>
      <span class="effect duration-500 ease-in-out rounded-xl"><MaterialSymbolsLabProfileOutline /></span>
    </a>
  </div>
</div>

<style>
  /* dumb ass name :(, cool ass animation :) */
  .cool-hover:hover>.effect {
    transform: rotateZ(360deg);
  }
</style>
