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

  import Header from "../cards/Header.svelte";
  import Projects from "../containers/Projects.svelte";
  import TechStack from "../containers/TechStack.svelte";

  import techs from "$lib/data/techstack.json";

  export let data;

  const brands = [
    { url: "https://www.github.com/BackwardsUser", icon: MdiGithub, redirect: false },
    { url: "https://git.backwards.dev/", icon: CibGitea, redirect: false },
    { url: "https://api.backwards.dev/files/Alexander_Harding_Resume.docx", icon: MdiResume, redirect: false },
    { url: "https://www.linkedin.com/in/alexander-harding-71b661265/", icon: MdiLinkedin, redirect: false },
    { url: "https://doodle.com/bp/backwards_user__/schedule-a-meeting", icon: MaterialSymbolsCalendarClockOutline, redirect: true },
    { url: "https://discord.gg/Zhq9yjhHKr", icon: MdiDiscord, redirect: false },
    { url: "https://www.youtube.com/@BackwardsDevelopment", icon: MdiYoutube, redirect: false },
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