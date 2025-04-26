import axios from "axios"
import { DISCORD_TOKEN } from "$env/static/private"

export const load = async () => {
  let content;
  try {
     content = await axios.get("https://discord.com/api/v9/users/@me", {
      headers: {
        "Authorization": DISCORD_TOKEN
      }
    });
  } catch {
    return {
      avatars: {
        "BackwardsUser": "/default.png"
      }
    }
  }

  return {
    avatars: {
      "BackwardsUser": `https://cdn.discordapp.com/avatars/${content.data.id}/${content.data.avatar}.png?size=64`
    }
  }
}