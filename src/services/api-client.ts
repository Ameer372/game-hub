import axios from "axios";

const apiKey = import.meta.env.VITE_RAWG_API_KEY as string;
if (!apiKey) {
  throw new Error("Missing VITE_RAWG_API_KEY");
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});
