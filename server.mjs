import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", async (req, res) => {
  res.json({ hello: "world" });
});

app.get("/ping", async (req, res) => {
  res.json({ ping: "alive" });
});
app.listen(process.env.PORT, () => {
  console.log('Server started on port', process.env.PORT)
});
