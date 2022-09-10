import express from "express"
import routes from "./routes/routes.js"
import mongoose from "mongoose"
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())
app.use("/", routes)

app.listen(3000, async () => {
    console.log(`Server is running`)
    mongoose.connect(process.env.MONGO_DB_CONNECT, () => {
        console.log(`Connected to DB`)
    })
})