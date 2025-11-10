import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDb } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001


app.get("/", (req, res) => {
    res.send("Welcome to the Notes API!");
});

//middleware
app.use(express.json()) // this middle ware allows you to get access to req.body
app.use(rateLimiter)
app.use("/api/notes", notesRoutes)

connectDb().then(() => {

    app.listen(PORT, () => {
        console.log(
            "Server is listening on PORT : ", PORT
        )
    })
})