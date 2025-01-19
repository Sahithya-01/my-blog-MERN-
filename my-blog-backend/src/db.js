let db
import dotenv from 'dotenv'
// This will load the variables from .env into process.env

import { MongoClient } from 'mongodb'
async function connectToDB(cb) {
  dotenv.config()
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.byiqzub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  // console.log(
  //   `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.byiqzub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  // )
  await client.connect()

  db = client.db('react-blog-db')
  cb()
}
export { connectToDB, db }
