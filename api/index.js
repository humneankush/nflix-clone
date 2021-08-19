const express = require("express");
const app = express();

const cors = require("cors");

const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB successfully connectd"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log("backend server is running");
});
