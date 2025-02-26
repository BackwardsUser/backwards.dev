<script>
  import { Avatar } from "@skeletonlabs/skeleton";
  import projects from "$lib/data/projects.json";
  import { onMount } from "svelte";

  const fallbackThumbnail = "/Image_not_available.png"; // Set a valid default image path

  function handleImageError(event, type) {
    if (type === "thumbnail") {
      event.target.src = fallbackThumbnail;
    }
  }
</script>


<div class="min-h-screen">
  <h2 class="h2 text-center w-screen pt-4 overflow-hidden">Projects</h2>
  <div class="flex flex-wrap gap-4 p-4 w-max max-w-full m-auto">
    {#each projects as project}
      <a href={project.url} class="card w-min variant-glass-surface card-hover overflow-hidden flex flex-col">
        <header>
          <img
          src={project.thumbnail || fallbackThumbnail}
          class="bg-black/50 aspect=[21/9] object-cover flex justify-center items-center"
          alt={project.name}
          loading="lazy"
          on:error={handleImageError}>
        </header>
        <div class="p-4 space-y-4 flex-auto">
          <h3 class="h3" data-toc-ignore>{project.name}</h3>
          <article>
            <p>
              {project.description}
            </p>
          </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex text-nowrap justify-start items-center space-x-4">
          <Avatar src={project.author.icon || fallbackAvatar} width="w-8" />
          <div class="flex-auto gap-6 flex justify-between items-center">
            <h6 class="font-bold" data-toc-ignore>
              By {project.author.username}
            </h6>
            <small>Updated {project.date}</small>
          </div>
        </footer>
      </a>
    {/each}
  </div>
</div>
