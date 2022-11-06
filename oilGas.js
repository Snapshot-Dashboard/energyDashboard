// Snapshot Dashboard Oil and Gas Data Analysis
// Developed by Paul Graham, Ryan Pags and Michael Tanner
// 11.6.2022

require("dotenv").config();

//Authenticate oilgas cluster
const { MongoClient, Collection } = require("mongodb");
const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

//Send data
async function run() {
  try {
    const database = client.db("oilGasData");
    const test = database.collection("test");
    const doc = { name: "Paul Graham", note: "Is our fearless leader" };
    const result = await test.insertOne(doc);
    console.log("A document was interest with the _id: ${result.insertedId}");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
