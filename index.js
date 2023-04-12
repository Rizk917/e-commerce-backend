import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import programRoute from "./routes/program.route.js";
import galleryRoute from "./routes/gallery.route.js";
import registerRoute from "./routes/register.route.js";
import partnersRoute from "./routes/partners.route.js";
import userRoute from "./routes/user.route.js";
import bodyParser from "body-parser";


dotenv.config();

const port = process.env.PORT || 5000;

await db();


const app = new express();

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/products", productRoute);
app.use("/categories", categoryRoute);
app.use("/register", registerRoute);
app.use("/user", userRoute);






app.listen(port, () => {
  console.log(`API IS RUNNING ON PORT: ${port}`);
});
