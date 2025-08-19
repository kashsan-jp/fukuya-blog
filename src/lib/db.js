import "server-only";

import { MongoClient, ServerApiVersion } from "mongodb";

if(!process.env.NEXT_PUBLIC_DB_URI){
    throw new Error("Mongo URI not found");
}

const client = new MongoClient(process.env.NEXT_PUBLIC_DB_URI, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getDB(dbName){
    try {
        await client.connect();
        console.log('>>>>Connected to DB<<<<');
        return client.db(dbName);
    } catch(err) {
        console.log(err);
    }
}

export async function getCollection(collectionName){
    const db = await getDB('next_blog_db');
    if(db) return db.collection(collectionName);

    return null;
}