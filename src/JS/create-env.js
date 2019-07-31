const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `CTF_SPACE_ID=${process.env.CTF_SPACE_ID}\n` +
    `CTF_ACCESS_TOKEN=${process.env.CTF_ACCESS_TOKEN}`
);
