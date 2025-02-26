<script>
  import Techs from '$lib/data/techstack.json';
  import { Avatar } from '@skeletonlabs/skeleton';
</script>

<!-- <div class="w-screen h-screen text-center pb-32 flex justify-center items-center px-8">
  <div class="wrapper h-max overflow-visible">
    <h2 class="h2 font-bold pb-0 w-full overflow-hidden">My Current Tech Stack</h2>
    <span class="text-sm pt-0 text-surface-700 dark:text-surface-200">Subject to change</span>
    <div class="pt-4 m-auto w-max max-w-full h-max flex flex-wrap gap-4 justify-center">
      {#each Techs as tech}
        <a href="{tech.url}" class="min-w-72 flex flex-row justify-between items-center card card-hover p-4 hover:bg-surface-700 rounded-lg">
          <Avatar class="p-2" src={tech.logo} alt={`Logo of ${tech.name}`} />
          <span class="text-xl">{tech.name}</span>
          <div class="spacer"></div>
        </a>
      {/each}
    </div>
  </div>
</div> -->

<div class="w-screen h-max min-h-screen flex flex-col justify-center items-center py-32">
  <div class="header-wrapper text-center overflow-visible">
    <h2 class="flex-shrink-0 flex-grow-1 h2 font-bold pb-0 w-full overflow-hidden">My Current Tech Stack</h2>
    <span class="text-sm pt-0 text-surface-700 dark:text-surface-200">Subject to Change</span>
  </div>
  <div class="pt-4 w-max max-w-full h-max flex flex-wrap gap-4 justify-center overflow-visible">
    {#each Techs as tech}
      <a href="{tech.url}" class="min-w-72 flex flex-row justify-between items-center card card-hover p-4 dark:hover:bg-surface-700 hover:bg-surface-200 rounded-lg">
        <Avatar class="p-2" src={tech.logo} alt={`Logo of ${tech.name}`} />
        <span class="text-xl">{tech.name}</span>
        <div class="spacer"></div>
      </a>
    {/each}
  </div>
</div>