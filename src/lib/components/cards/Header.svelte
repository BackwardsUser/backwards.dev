<script>
  import BrandIcon from "$lib/components/items/BrandIcon.svelte";

  export let brands;
</script>

<header class="w-full h-screen flex flex-col justify-center items-center">
  <div id="header-wrapper" class="header-wrapper text-center">
    <h1 id="title" class="h1">Alexander Harding</h1>
    <h4 class="h4 m-0">Software and Application Developer</h4>
    <div class="mx-auto cards self-center flex w-4/5 flex-wrap justify-center items-center gap-2 mt-6 lg:w-full">
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
</style>