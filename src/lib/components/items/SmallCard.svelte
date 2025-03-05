<script>
  import { Avatar } from "@skeletonlabs/skeleton";

  export let data;
</script>

<a href="{data.url}" class="m-4 flex flex-row justify-between items-center card card-hover p-4 dark:hover:bg-surface-700 hover:bg-surface-200 rounded-lg">
  <Avatar class="p-2" src={data.logo} alt={`Logo of ${data.name}`} />
  <span class="text-xl">{data.name}</span>
  <div class="spacer"></div>
</a>