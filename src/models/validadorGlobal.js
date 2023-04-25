import mongoose from "mongoose"

mongoose.Schema.Types.String.set("validate",{
  validator: (str)=>{
    return str !== ""
  },
  message: ()=>"Campos de texto não podem ser enviados em branco"
})