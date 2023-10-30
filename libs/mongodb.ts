// import mongoose from "mongoose";

// const MONGODB_URL = process.env.DATABASE_URL;

// if (!MONGODB_URL) {
//   throw new Error(
//     "Please define the MONGODB_URL environment variable inside .env.local"
//   );
// }

// declare global {
//   var mongoose: any; // This must be a `var` and not a `let / const`
// }
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function clientPromise() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URL!, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
// export default clientPromise;

// mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// };

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env");
}

if (process.env.NODE_ENV === "development") {
  let globalWithMongo = global as typeof globalThis & {
    _mongoclientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoclientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoclientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoclientPromise;
} else {
  // in product bext not to use global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
