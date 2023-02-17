import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { DataBase } from "../service/db.js";

const PORT = process.env.PORT || 3000;
const app = express();
const db = new DataBase();

app.use(bodyParser.json());
app.use(express.static("view"));
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const indexPath = path.join(__dirname, "/view/index.html");
app.get("/", (req, res) => {
  res.status(200).sendFile(indexPath);
});
app.get("/api/getArticle", (req, res) => {
  const id = req.query.id;
  const data = db.getArticle(id);
  if (data) {
    res.status(200).json(data);
    return;
  }

  res.status(404).json({ message: "Artigo não encontrado." });
});
app.delete("/api/deleteArticle", (req, res) => {
  const id = req.query.id;
  db.delete(id);

  res.status(200);
});
app.put("/api/updateArticle", (req, res) => {
  const id = req.query.id;
  const article = req.body;

  const data = db.editById(id, article.content);

  if (data) {
    res.status(200).json(data);
    return;
  }

  res.status(404).json({ message: "Artigo não encontrado." });
});
app.patch("/api/editAll", (req, res) => {
  const article = req.body;

  db.editAll(article);

  res.status(200).json({ message: "update ok" });
});
app.post("/api/createArticle", (req, res) => {
  const article = req.body;

  db.add(article);

  res.status(200).json({ message: "update ok" });
});

export const startSever = () => {
  app.listen(PORT, () => console.log("Server is running"));
};
