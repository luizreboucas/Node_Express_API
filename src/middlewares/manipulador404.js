import Handler404 from "../erros/Handler404.js"

// eslint-disable-next-line no-unused-vars
export default function manipulador404(req,res,next){
  const erro = new Handler404()
  next(erro)
}