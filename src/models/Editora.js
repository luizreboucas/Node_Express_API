import mongoose from "mongoose"

const editorasSchema = new mongoose.Schema({
  id: {type: String},
  nome:{type: String, required: [true, "O nome da editora é obrigatório"]},
  endereco: {type: String, required: [true, "o campo endereço é obrigatório"]}
})

const editoras = mongoose.model("editoras", editorasSchema)

export default editoras