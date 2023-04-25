
import Handler404 from "../erros/Handler404.js"
import {livros} from "../models/index.js"
import {autores} from "../models/index.js"


class LivroController {

  static listarLivros = async(req, res,next) => {
    try {
      
      const livrosResults = await livros.find().populate("autor")
      res.status(200).json(livrosResults)
      
    } catch (error) {
      next(error)
    }
  }

  static listarLivroPorId = async(req, res,next) => {
    try {
      const result = await livros.findById(req.params.id)
      
      if(result !== null){
        res.status(200).json(result)
      }else{
        next(new Handler404("livro não encontrado"))
      }
    } catch (error) {
      next(error)
      
    }
  }

  static cadastrarLivro = async(req, res, next) => {

    
    try {
      const autor = await autores.findById(req.body.autor)
      if(!autor){
        next(new Handler404("Autor não encontrado"))
      }else{
        const novoLivro = new livros(req.body) 
      
        await novoLivro.save()
        res.status(200).json(novoLivro)
      }
      
      
      
    }catch (error) {
      next(error)
    }
  }

  static atualizarLivro = async(req, res,next) => {
    const {titulo, autor, editora, numeroPaginas} = req.body
    try {
      const novoLivro = {titulo, autor, editora, numeroPaginas}
      const livro = await livros.findByIdAndUpdate(req.params.id, novoLivro)
      if(!livro){
        next(new Handler404("livro não encontrado"))
      }else{
        res.status(200).json(novoLivro)
      }
      
      
    } catch (error) {
      next(error)
    }
  }

  static excluirLivro = async(req, res,next) => {
    try {
      const livroDeletado = await livros.findByIdAndDelete(req.params.id)
      if(!livroDeletado){
        res.status(200).json(livroDeletado)
      }else{
        res.status(201).send(`o livro ${livroDeletado.titulo} foi deletado`)
      }
      
      
    } catch (error) {
      next(error)
    }
  }
  static getLivrosPorFiltro = async(req,res)=>{
    try {
      const { titulo} = req.query
      console.log("titulo:", titulo)
      await livros.find({titulo: titulo})
      res.status(200).send(titulo)
    } catch (error) {
      res.status(500).send("a requisição passou aqui")
    }
  }
}

export default LivroController