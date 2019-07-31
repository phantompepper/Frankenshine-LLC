import { createClient } from "contentful";

// import contentful
const client = createClient({
  space: process.env.VUE_APP_CTF_SPACE_ID,
  accessToken: process.env.VUE_APP_CTF_ACCESS_TOKEN
});

export default client;
