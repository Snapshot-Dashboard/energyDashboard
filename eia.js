const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const url =
  "https://api.eia.gov/v2/petroleum?api_key=f8127de985a95b35a603961cfd50cdbd";

fetch(url).then((response) => {
  const data = response.json();
});

console.log(data);

async function fetchEiaData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

console.log("yay");
