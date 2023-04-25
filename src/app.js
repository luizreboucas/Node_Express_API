import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import errorManipulator from "./middlewares/errorManipulators.js"
import manipulador404 from "./middlewares/manipulador404.js"


db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso")
})

const app = express()

routes(app)

app.use(manipulador404)

// eslint-disable-next-line no-unused-vars
app.use(errorManipulator)

export default app