<script>
  import MdiGithub from "~icons/mdi/github";
  import MdiYoutube from "~icons/mdi/youtube";
  import MdiDiscord from "~icons/mdi/discord";
  import MdiLinkedin from "~icons/mdi/linkedin";
  import MdiResume from '~icons/mdi/resume';
  import CibGitea from "~icons/cib/gitea";
  import MaterialSymbolsPerson from '~icons/material-symbols/person';
  import MaterialSymbolsMail from '~icons/material-symbols/mail';
  import MaterialSymbolsCalendarClockOutline from '~icons/material-symbols/calendar-clock-outline';


  import Header from "$lib/components/cards/Header.svelte";
  import SmallCard from "../items/SmallCard.svelte";

  import techs from "$lib/data/techstack.json";
  import projects from "$lib/data/projects.json";

  import { onMount } from "svelte";
  import DylanIpsum from "dylan-ipsum";
  import LargeCard from "../items/LargeCard.svelte";
  import Contact from "../containers/Contact.svelte";

  export let data;

  const brands = [
    { url: "https://www.github.com/BackwardsUser", icon: MdiGithub },
    { url: "https://git.backwards.dev/", icon: CibGitea },
    { url: "https://api.backwards.dev/files/Alexander_Harding_Resume.docx", icon: MdiResume },
    { url: "https://www.linkedin.com/in/alexander-harding-71b661265/", icon: MdiLinkedin },
    { url: "https://doodle.com/bp/backwards_user__/schedule-a-meeting", icon: MaterialSymbolsCalendarClockOutline },
    { url: "https://discord.gg/Zhq9yjhHKr", icon: MdiDiscord },
    { url: "https://www.youtube.com/@BackwardsDevelopment", icon: MdiYoutube },
  ];

  const downloads = [];

  let End = 300;
  let rightStart = 0;

  function setSidebars() {
    let rPos = Math.min(window.scrollY / End, 1);
    let lPos = Math.min(Math.max((window.scrollY - rightStart) / End, 0), 1);
    document.getElementById("left").style =
      `transform: translateX(${(lPos - 1) * 100}%);`;
    document.getElementById("right").style =
      `transform: translateX(${Math.abs(rPos - 1) * 100}%);`;
  }

  const avatars = data.avatars;

  onMount(() => {
    setSidebars();
    window.addEventListener("scroll", setSidebars);
  });
</script>

<div id="main" class="w-screen grid">
  <div id="left" class="sidebar h-screen bg-surface-200 dark:bg-surface-500 text-center">
    <h4 class="h4">My Tech Stack</h4>
    <div class="cards">
      {#each techs as tech}
        <SmallCard data={tech} />
      {/each}
    </div>
  </div>

  <div id="content">
    <Header {brands}></Header>
    <div id="projects" class="flex py-8 m-4 flex-col justify-center items-center bg-surface-200 dark:bg-surface-500 rounded-lg">
      <h1 class="h1 pb-8">Projects</h1>
      <div class="flex flex-shrink-0 flex-wrap justify-center gap-4">
        {#each projects as project}
          <LargeCard data={project} {avatars} />
        {/each}
      </div>
    </div>
    <div id="contact">
      <Contact />
    </div>
  </div>

  <div id="right" class="sidebar h-screen bg-surface-200 dark:bg-surface-500 text-center">
    <h4 class="h4">Downloads</h4>
    {#if downloads.length > 0}
      {#each downloads as download}
        <p class="pt-4">-- Not Implemented --</p>
      {/each}
    {:else}
      <p class="pt-4">-- No files uploaded --</p>
    {/if}
  </div>
</div>

<style>
  #main {
    contain: paint;
    grid-template-columns: 20% 60% 20%;
    position: relative;
  }

  #left {
    border-radius: 0 0.5em 0.5em 0;
    transform: translateX(-100%);
  }

  #right {
    border-radius: 0.5em 0 0 0.5em;
    transform: translateX(100%);
  }

  .sidebar {
    position: sticky;
    top: 0;
    right: 0;
  }
</style>
