import mongoose from "mongoose"

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "o id do autor é obrigatório"]},
    editora: {type: String, required: [true, "o nome da editora é obrigatório"]},
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (num)=>{
          return num > 10 && num < 5000
        }
      },
      message: "O número de páginas deve estar entre 10 e 5000. Valor recebido {VALUE}"
    }
  }
)

const livros= mongoose.model("livros", livroSchema)

export default livros