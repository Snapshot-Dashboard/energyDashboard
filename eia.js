require("dotenv").config();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const url = "https://api.eia.gov/v2/petroleum?api_key=" + process.env.EIA_API;

fetch(url)
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
    return body;
  });

console.log("yay");
