require("dotenv").config();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// api v1 - need to move to v2
const url =
  "http://api.eia.gov/series/?api_key=" +
  process.env.EIA_API +
  "&series_id=PET.WCRSTUS1.W";

fetch(url)
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
    return body;
  });

console.log("yay");
