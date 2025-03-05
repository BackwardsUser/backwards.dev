import axios from "axios"
import { DISCORD_TOKEN } from "$env/static/private"

export const load = async () => {
  let content = await axios.get("https://discord.com/api/v9/users/@me", {
    headers: {
      "Authorization": DISCORD_TOKEN
    }
  });
  
  return {
    avatars: {
      "BackwardsUser": `https://cdn.discordapp.com/avatars/${content.data.id}/${content.data.avatar}.png?size=64`
    }
  }
}