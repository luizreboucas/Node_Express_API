import ErrorHandler from "./ErroHandler.js"

export default class Handler404 extends ErrorHandler{
  constructor(mensagem = "autor não encontrado"){
    super(`${mensagem}`, 404)
  }
}