const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session")
const passport = require("passport")

require("dotenv").config();
const uri = process.env.LOCALDB
const secret_key = process.env.SECRET

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(session({
    secret:secret_key,
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(uri)
const connection = mongoose.connection
connection.once("open", ()=>{
    console.log("MongoDB database connection established successfully!")
})

const userRouter = require("./routes/user")
const categoryRouter = require("./routes/category")
const expenseRouter = require("./routes/expense")

app.use("/users", userRouter)
app.use("/categories", categoryRouter)
app.use("/expenses", expenseRouter)

app.listen(port, ()=>{
    console.log(`Server is running on port: ${5000}`);
})