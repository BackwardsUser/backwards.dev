<script>
  import Techs from '$lib/data/techstack.json';
  import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="w-screen h-screen flex flex-col justify-center items-center">
  <h2 class="h2 font-bold pb-0">Our Preferred Tech Stack</h2>
  <span class="text-sm pt-0 pb-4 text-surface-200">Subject to change</span>
  <div class="w-1/2 flex flex-wrap gap-4 justify-center">
    {#each Techs as tech}
      <a href={tech.url} class="min-w-72 flex flex-row justify-between items-center card card-hover p-4 hover:bg-surface-700 rounded-lg">
        <Avatar class="p-2" src={tech.logo} alt={`Logo of ${tech.name}`} />
        <span class="text-xl">{tech.name}</span>
        <div class="spacer"></div>
      </a>
    {/each}
  </div>
</div>
