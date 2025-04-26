<script>
  import { Avatar } from "@skeletonlabs/skeleton";

  const fallbackThumbnail = "/Image_not_available.png";
  const fallbackAvatar = "/default.png";

  function handleImageError(event) {
    event.target.src = fallbackThumbnail;
  }

  export let data, avatars;

  const avatar = avatars[data.author.username];
</script>

<a href={data.url} class="card w-min variant-glass-surface card-hover overflow-hidden flex flex-col">
  <header>
    <img
    src={data.thumbnail || fallbackThumbnail}
    class="bg-black/50 aspect=[21/9] object-cover flex justify-center items-center"
    alt={data.name}
    loading="lazy"
    on:error={handleImageError}>
  </header>
  <div class="p-4 space-y-4 flex-auto">
    <h3 class="h3" data-toc-ignore>{data.name}</h3>
    <article>
      <p>
        {data.description}
      </p>
    </article>
  </div>
  <hr class="opacity-50" />
  <footer class="p-4 flex text-nowrap justify-start items-center space-x-4">
    <Avatar src={avatar || fallbackAvatar} width="w-8" />
    <div class="flex-auto gap-6 flex justify-between items-center">
      <h6 class="font-bold" data-toc-ignore>
        By {data.author.username}
      </h6>
      <small>Updated {data.date}</small>
    </div>
  </footer>
</a>