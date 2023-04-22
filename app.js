import express from "express";
import morgan from "morgan";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import UsersController from "./Controllers/Users/users-controller.js";
import AddressController from "./Controllers/Address/address-controller.js";
import ProductController from "./Controllers/Products/product-controller.js";
import LikesController from "./Controllers/Likes/likes-controller.js";
import ReviewsController from "./Controllers/Reviews/reviews-controller.js";
import TestController from "./Controllers/Test/test-controller.js"

const app = express();
const port = process.env.PORT || 4300;
app.set("port", port);

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
UsersController(app);
AddressController(app);
ProductController(app);
LikesController(app);
ReviewsController(app);
TestController(app);
app.use(express.static("static"));
app.use(morgan("dev"));
app.use((req, res) => {
  const err = new Error("Not Found");
  err.status = 404;
  res.json(err);
});

const CONNECTION_STRING = 'mongodb+srv://gunnermongodb:northlondon1886@cluster0.xjewxjg.mongodb.net/recipeDB' 

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`Recipe-Master app listening on port ${port}!`));
});
