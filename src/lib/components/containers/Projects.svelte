<script>
  import LargeCard from "../items/LargeCard.svelte";

  import projects from "$lib/data/projects.json";
  import LargeCardSm from "../items/LargeCard-sm.svelte";

  export let data;

  const { avatars } = data;
</script>

<div id="projects" class="h-full">
  <h2 class="h2 mb-4">Projects</h2>
  <div class="h-fit gap-4 flex flex-col overflow-scroll">
    {#each projects as project}
      <LargeCardSm data={project} {avatars} />
    {/each}
  </div>
</div>