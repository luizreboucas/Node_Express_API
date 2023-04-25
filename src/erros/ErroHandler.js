
export default class ErrorHandler extends Error{
    
  constructor(mensagem = "erro interno de servidor", status = 500){
    super()
    this.message = mensagem
    this.status = status
  }

  enviarResposta(res){
    res.status(this.status).json({
      message: this.message,
      status: this.status
    })
  }
}