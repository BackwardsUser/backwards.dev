<script>
  export let url, icon, redirect;
</script>

<a href={url} target="_blank" class="btn variant-filled-surface text-2xl p-3 rounded-md spin">
  <span class="block spinner duration-500"><svelte:component this={icon}></svelte:component></span>
</a>