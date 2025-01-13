<script>
  import { Avatar } from "@skeletonlabs/skeleton";
  import imageNotAvailable from '$lib/assets/Image_not_available.png';

  // populate this with real data, using database?
  let Downloads = [
    {
      name: "DOT Bot Manager",
      description: "A Modular Discord bot to help you better manage your discord server the way *you* want.",
      author: {
        username: "BackwardsUser",
        icon: "https://cdn.discordapp.com/avatars/471172695862542337/306522a721ee716ba6348babfd9bbdff.webp?size=32"
      },
      date: "2025-01-13",
      thumbnail: "https://api.backwardsdevelopment.ca/images/treeline.jpg"
    },
    {
      name: "Mystic Helper Bot",
      description: "A bot that helps organize events, polls, and reminders with a magical twist!",
      author: {
        username: "MysticMaster",
        icon: "https://cdn.discordapp.com/avatars/123456789012345678/abc123def4567890abc123def4567890.webp?size=32"
      },
      date: "2025-01-12",
      thumbnail: "https://api.backwardsdevelopment.ca/images/treeline.jpg"
    },
    {
      name: "Game Stats Tracker",
      description: "Track your game stats and leaderboard rankings across various multiplayer games.",
      author: {
        username: "GameTrackerPro",
        icon: "https://cdn.discordapp.com/avatars/987654321098765432/def789abc123456789abc1234567890.webp?size=32"
      },
      date: "2025-01-11",
      thumbnail: "https://api.backwardsdevelopment.ca/images/treeline.jpg"
    },
    {
      name: "Quick Polls Bot",
      description: "Create and manage quick polls for your community to vote on different topics.",
      author: {
        username: "PollCreator",
        icon: "https://cdn.discordapp.com/avatars/112233445566778899/ghi345jkl9876543210ghi345jkl987654.webp?size=32"
      },
      date: "2025-01-10",
      thumbnail: "https://api.backwardsdevelopment.ca/images/treeline.jpg"
    },
    {
      name: "Music Party Bot",
      description: "Create your own music playlist and enjoy it with your friends in Discord voice channels.",
      author: {
        username: "DJPartyBot",
        icon: "https://cdn.discordapp.com/avatars/223344556677889900/jkl123mno4567890jkl123mno4567890.webp?size=32"
      },
      date: "2025-01-09",
      thumbnail: "https://example.com/images/music_party.jpg"
    }
  ];

  function imageAlt(event) {
    event.target.src = imageNotAvailable;
    event.target.classList.add("object-contain");  // Add object-contain for the alt image
  }
</script>

<div class="w-screen min-h-screen">
  <h2 class="h2 text-center w-screen pt-4 font-nunito">Downloads</h2>
  <div class="px-32 py-16 grid grid-cols-2 md:grid-cols-3 gap-4">
    {#each Downloads as download}
      <a
        class="card variant-glass-surface card-hover overflow-hidden"
        href="/elements/cards"
      >
        <header>
          <!-- Main image (rectangle) -->
          <img
            src={download.thumbnail}
            class="bg-black/50 w-full aspect-[21/9] object-cover flex justify-center items-center"
            alt="Post"
            on:error={imageAlt}
          />
        </header>
        <div class="p-4 space-y-4">
          <h3 class="h3" data-toc-ignore>{download.name}</h3>
          <article>
            <p>
              {download.description}
            </p>
          </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
          <Avatar
            src={download.author.icon}
            width="w-8"
          />
          <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold" data-toc-ignore>By {download.author.username}</h6>
            <small>On {download.date}</small>
          </div>
        </footer>
      </a>
    {/each}
  </div>
</div>
