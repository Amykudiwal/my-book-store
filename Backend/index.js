const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const PORT = 8000;

const app = express();

app.use(bodyParser.json());

const bookRoute = require("./routes/BookRoute");
const CategoryRoute = require("./routes/CategoryRoute");
const usersRoute = require("./routes/UserRoute");
const reviewRoute = require("./routes/ReviewRoute");
const cartRoute = require("./routes/CartRoute");
const orderRoute = require("./routes/OrderRoute");

const mongoose = require("mongoose");

const cors = require("cors");

app.use(cookieParser());

app.use(cors());

app.use(express.json());

const dotenv = require("dotenv");

dotenv.config();

app.use(orderRoute);

mongoose
  .connect(
    "mongodb+srv://amitudiwal1:DuwTRCWQfVwW0l7V@cluster0.r9efxxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Database ...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

app.use(bookRoute);
app.use(CategoryRoute);
app.use("/api/users", usersRoute);
app.use(reviewRoute);
app.use("/cart", cartRoute);
