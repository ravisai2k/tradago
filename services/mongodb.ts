import { MongoClient, ServerApiVersion } from "mongodb";

const uri: string = process.env.MONGO_URI || "";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});