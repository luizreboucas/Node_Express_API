import ReqErroHandler from "./ReqErroHandlers.js"



export default class ValErrorHandler extends ReqErroHandler{
  constructor(erro){
    const errorObjectMessage = Object.values(erro.errors).map(err=>err.message).join("; ")
    super(`${errorObjectMessage}`)
  }
}