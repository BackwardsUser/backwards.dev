<script>
  import BrandIcon from "$lib/components/items/BrandIcon.svelte";

  export let brands;
</script>

<header class="w-full h-screen flex flex-col justify-center items-center">
  <div id="header-wrapper" class="header-wrapper">
    <h1 id="title" class="h1 fixed">Alexander Harding</h1>
    <h4 class="h4 m-0">Software and Application Developer</h4>
    <div class="cards flex w-full justify-between mt-6">
      {#each brands as brand}
        <BrandIcon url={brand.url} icon={brand.icon} />
      {/each}
    </div>
  </div>
</header>

<style>
  .header-wrapper {
    position: relative;
  }

  #title.fixed {
    transform: translateY(-100%) translateX(-0.75em);
  }
</style>