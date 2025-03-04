<script>
  export let url, icon;
</script>

<a href={url} class="btn variant-filled-surface text-2xl p-3 rounded-md spin">
  <span class="block spinner duration-500"><svelte:component this={icon}></svelte:component></span>
</a>