<script>
  import MdiGithub from "~icons/mdi/github";
  import MdiYoutube from "~icons/mdi/youtube";
  import MdiDiscord from "~icons/mdi/discord";
  import MdiLinkedin from "~icons/mdi/linkedin";
  import CibGitea from "~icons/cib/gitea";

  import Header from "../cards/Header.svelte";
  import Projects from "../containers/Projects.svelte";
  import TechStack from "../containers/TechStack.svelte";

  import techs from "$lib/data/techstack.json";

  export let data;

  const brands = [
    { url: "https://www.github.com/BackwardsUser", icon: MdiGithub },
    { url: "https://www.youtube.com/@BackwardsDevelopment", icon: MdiYoutube },
    { url: "https://discord.gg/Zhq9yjhHKr", icon: MdiDiscord },
    {
      url: "https://www.linkedin.com/in/alexander-harding-71b661265/",
      icon: MdiLinkedin,
    },
    { url: "https://git.backwards.dev/", icon: CibGitea },
  ];
</script>

<Header {brands} />

<!-- <div class="main flex flex-col gap-8">
  <div class="section">
    <Header {brands} />
  </div>
  <div class="section bg-surface-800 py-4 rounded-2xl flex flex-col">
    <TechStack {techs} />
  </div>
  <div class="section bg-surface-800 py-4 rounded-2xl">
    <Projects {data} />
  </div>
</div> -->

<style>
  .section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>