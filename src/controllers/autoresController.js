import Handler404 from "../erros/Handler404.js"
import {autores} from "../models/index.js"

class AutorController {

  static listarAutores = async(req, res, next) => {
    try {
      const autorResultados = await autores.find()
      res.status(200).json(autorResultados)
      
    } catch (error) {
      next(error)
    }
    
  }

  static listarAutorPorId = async(req, res,next) => {

    try {
      const autor =  await autores.findById(req.params.id)
      
      if(!autor){
        next(new Handler404("autor não encontrado"))
      }else{
        res.status(200).send(autor)
      }
    } catch (error) {
      next(error)
    }
  }
  

  static cadastrarAutor = async(req, res,next) => {

    const {nome, nacionalidade} = req.body

    try {
      const autor = new autores({nome, nacionalidade})
      await autor.save()
      res.status(200).send(autor)
      
    } catch (error) {
      next(error)
    }
  }

  static atualizarAutor = async(req, res,next) => {
    const { nome, nacionalidade } = req.body
    try {
      const autorAtualizado = {nome,nacionalidade}
      const autor = await autores.findByIdAndUpdate(req.params.id, autorAtualizado)
      
      if(!autor){
        next(new Handler404("autor não encontrado"))
      }else{
        res.status(200).send("autor atualizado")
      }
      
    } catch (error) {
      next(error)
    }
    
  }

  static excluirAutor = async(req, res,next) => {
    try {
      const autorDeletado = await autores.findByIdAndDelete(req.params.id)
      if(!autorDeletado){
        next(new Handler404("autor não encontrado"))
      }else{
        res.status(200).send(autorDeletado)
      }
      
      
    } catch (error) {
      next(error)
    }
  }

}

export default AutorController