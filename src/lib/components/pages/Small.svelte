<!-- How to make smoother scroll gooders -->
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

  const brands = [
    { url: "https://www.github.com/BackwardsUser", icon: MdiGithub },
    { url: "https://git.backwards.dev/", icon: CibGitea },
    { url: "https://api.backwards.dev/files/Alexander_Harding_Resume.docx", icon: MdiResume },
    { url: "https://www.linkedin.com/in/alexander-harding-71b661265/", icon: MdiLinkedin },
    { url: "https://doodle.com/bp/backwards_user__/schedule-a-meeting", icon: MaterialSymbolsCalendarClockOutline },
    { url: "https://discord.gg/Zhq9yjhHKr", icon: MdiDiscord },
    { url: "https://www.youtube.com/@BackwardsDevelopment", icon: MdiYoutube },
  ];
</script>
<!-- spam -->
<Header {brands} />