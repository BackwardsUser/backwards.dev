<script>
  import BackwardsLogo from "$lib/assets/Backwards.png";

  import MdiGithub from '~icons/mdi/github';
  import MdiYoutube from '~icons/mdi/youtube';
  import MdiDiscord from '~icons/mdi/discord';
  import MdiLinkedin from '~icons/mdi/linkedin';
  import CibGitea from '~icons/cib/gitea';

</script>

<div class="text-center h-max self-center" id="hero">
  <h1 class="h1 overflow-hidden">Backwards Development</h1>
  <h4 class="h4">A Software Development and Distribution Company</h4>
  <div class="flex justify-evenly pt-4">
    <a href="https://github.com/BackwardsUser/" class="btn variant-filled-surface text-2xl p-3 rounded-md spin">
      <span class="block spinner duration-500"><MdiGithub /></span>
    </a>
    <a href="https://git.backwards.dev/" class="btn variant-filled-surface text-2xl p-3 rounded-md spin">
      <span class="block spinner duration-500"><CibGitea /></span>
    </a>
    <a href="https://www.linkedin.com/in/alexander-harding-71b661265/" class="btn variant-filled-surface text-2xl p-3 rounded-md spin">
      <span class="block spinner duration-500"><MdiLinkedin /></span>
    </a>
    <a href="https://www.youtube.com/@BackwardsDevelopment" class="btn variant-filled-surface text-2xl p-3 rounded-md spin">
      <span class="block spinner duration-500"><MdiYoutube /></span>
    </a>
    <a href="https://discord.gg/Zhq9yjhHKr" class="btn variant-filled-surface text-2xl p-3 rounded-md spin">
      <span class="block spinner duration-500"><MdiDiscord /></span>
    </a>
  </div>
</div>

<style>
  .spin:hover>.spinner {
    transform: rotateZ(360deg);
  }
</style>