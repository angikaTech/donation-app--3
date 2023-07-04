const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express()
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const cors = require('cors')
// db connection


// app.use(cors())
app.use("*", cors({
    origin: true,
    credentials: true,
}));



dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// router 
app.use("/api/user", authRouter);
app.use("/", (req, res) => {
    res.send("Not Found ! You are lost")
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});  