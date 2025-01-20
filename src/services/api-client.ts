import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6cd6a5e291d54c848efefae00523821e",
  },
});
