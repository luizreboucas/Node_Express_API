import {editoras} from "../models/index.js"
import Handler404 from "../erros/Handler404.js"

export default class EditorasController{
  static getEditoras =  async(req,res,next)=>{
    try {
      const editorasResult = await editoras.find()
      res.status(200).json(editorasResult)
    } catch (error) {
      next(error)
    }
  }
  static getEditora = async(req, res,next) => {

    try {
      const autor =  await editoras.findById(req.params.id)
      
      if(!autor){
        next(new Handler404("autor não encontrado"))
      }else{
        res.status(200).send(autor)
      }
    } catch (error) {
      next(error)
    }
  }

  static postEditora = async(req,res,next)=>{
    try {
      const novaEditora = new editoras(req.body)
      await novaEditora.save()
      res.status(200).json(novaEditora)
    } catch (error) {
      next(error)
    }
  }
  static updateEditora = async(req,res,next)=>{
    try {
      const {nome, endereco} = req.body
      const novaEditora = {
        nome,endereco
      }
      await editoras.findByIdAndUpdate(req.params.id, novaEditora)
      res.status(200).json(novaEditora)
    } catch (error) {
      next(error)
    }
  }
  static deleteEditora = async(req,res,next)=>{
    try {
      const editoraDeletada = await editoras.findByIdAndDelete(req.params.id)
      res.status(200).json(editoraDeletada)

    } catch (error) {
      next(error)
    }
  }

}