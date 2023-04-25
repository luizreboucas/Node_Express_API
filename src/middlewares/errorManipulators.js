import mongoose from "mongoose"
import ErrorHandler from "../erros/ErroHandler.js"
import ReqErroHandler from "../erros/ReqErroHandlers.js"
import ValErrorHandler from "../erros/ValErroHandler.js"
import Handler404 from "../erros/Handler404.js"

// eslint-disable-next-line no-unused-vars
const errorManipulator = (erro,req,res,next) =>{
  if(erro instanceof mongoose.Error.CastError){
    new ReqErroHandler().enviarResposta(res)
  }else if(erro instanceof mongoose.Error.ValidationError){
    new ValErrorHandler(erro).enviarResposta(res)
  }else if(erro instanceof Handler404){
    erro.enviarResposta(res)
  }
  else {
    new ErrorHandler().enviarResposta(res)
  }
}


export default errorManipulator