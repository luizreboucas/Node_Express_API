
import ErrorHandler from "./ErroHandler.js"

export default class ReqErroHandler extends ErrorHandler{
  constructor(mensagem = "um ou mais dados fornecidos estão incorretos" ){
    super(mensagem, 400)
  }
}