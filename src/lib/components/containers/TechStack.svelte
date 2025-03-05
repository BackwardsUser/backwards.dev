<script>
  import SmallCard from "../items/SmallCard.svelte";

  export let techs;
</script>

<h2 class="h2">My Tech Stack</h2>
<div class="cards">
  {#each techs as tech}
    <SmallCard data={tech} />
  {/each}
</div>