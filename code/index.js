import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const port = 3000;

import { APIs } from "./apis/web.js";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/api", APIs);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
