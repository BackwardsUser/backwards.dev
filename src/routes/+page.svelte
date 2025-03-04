<script>

  import BrandIcon from "$lib/components/items/BrandIcon.svelte";

  import MdiGithub from '~icons/mdi/github';
  import MdiYoutube from '~icons/mdi/youtube';
  import MdiDiscord from '~icons/mdi/discord';
  import MdiLinkedin from '~icons/mdi/linkedin';
  import CibGitea from '~icons/cib/gitea';

  const brands = [
    { url: "https://www.github.com/BackwardsUser", icon: CibGitea },
    { url: "https://www.youtube.com/@BackwardsDevelopment", icon: MdiYoutube },
    { url: "https://discord.gg/Zhq9yjhHKr", icon: MdiDiscord },
    { url: "https://www.linkedin.com/in/alexander-harding-71b661265/", icon: MdiLinkedin },
    { url: "https://git.backwards.dev/", icon: CibGitea },
  ]

</script>
<main class="grid wrapper justify-center items-center">
  <div class="left w-full h-2/3 bg-surface-500 text-center">
    <h4 class="h4">Tools</h4>
  </div>
  <div class="header-wrapper">
    <header class="w-full h-screen flex flex-col justify-center items-center">
      <h1 class="h1">Alexander Harding</h1>
      <h4 class="h4">Software and Application Developer</h4>
      <div class="cards flex justify-between">
        {#each brands as brand}
          <BrandIcon url={brand.url} icon={brand.icon} />
        {/each}
      </div>
    </header>
  </div>
  <div class="right w-full h-2/3 bg-surface-500 text-center">
    <h4 class="h4">Downloads</h4>
  </div>
  <div class="main">
    <div class="projects"></div>
    <div class="contact"></div>
  </div>
</main>

<style>
  .wrapper {
    grid-template-columns: 0.5fr 2fr 0.5fr;
  }

  .left {
    border-radius: 0 0.5em 0.5em 0;
  }

  .right {
    border-radius: 0.5em 0 0 0.5em;
  }
</style>