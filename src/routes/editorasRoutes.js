import express from "express"
import EditorasController from "../controllers/editorasController.js"
const Router = express.Router()


Router
  .get("/editoras", EditorasController.getEditoras)
  .get("/editoras/:id",EditorasController.getEditora)
  .post("/editoras", EditorasController.postEditora)
  .put("/editoras/:id",EditorasController.updateEditora)
  .delete("/editoras/:id",EditorasController.deleteEditora)

export default Router