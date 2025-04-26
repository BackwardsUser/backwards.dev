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

<a href={data.url} class="card variant-glass-surface card-hover overflow-hidden flex flex-col w-64">
  <img
    src={data.thumbnail || fallbackThumbnail}
    class="bg-black/50 aspect-[21/9] object-cover"
    alt={data.name}
    loading="lazy"
    on:error={handleImageError}
  />

  <div class="p-3 space-y-2 flex-auto">
    <h3 class="text-lg font-bold truncate">{data.name}</h3>
    <p class="text-sm line-clamp-2">{data.description}</p>
  </div>

  <hr class="opacity-50 mx-3" />

  <footer class="p-3 flex items-center space-x-3 text-xs">
    <Avatar src={avatar || fallbackAvatar} width="w-6" />
    <div class="flex-auto truncate">
      <h6 class="font-semibold">By {data.author.username}</h6>
      <small class="opacity-75">Updated {data.date}</small>
    </div>
  </footer>
</a>
