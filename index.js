const express = require('express')
const app = express()
// const fs = require('fs').promises

// Se importa handlebars
const { engine } = require('express-handlebars')
// Se crea el servidor
app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})

// Middleware de Bootstrap, Jquery y assets
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
app.use(express.static(__dirname + '/assets/img'))

// Se configura handlebars
app.engine(
    'handlebars',
    engine({
        layoutsDir: __dirname + '/views',
        partialsDir: __dirname + '/views/partials/'
    })
)
app.set('view engine', 'handlebars')

/*
const leerJson = async () => {
    const data = await fs.readFile(__dirname + '/productos.json')
    const dataJSON = JSON.parse(data)
    console.log(dataJSON)
}
leerJson()
*/

// Ruta que mostrará el handlebar que contendrá el código html main
app.get('/', (req, res) => {
    res.render("main", {
        layout: "main",
        productos: [
          {
            nombre: "Plátano",
            img: "platano.png",
          },
          {
            nombre: "Cebollas",
            img: "cebollas.png",
          },
          {
            nombre: "Lechuga",
            img: "lechuga.png",
          },
          {
            nombre: "Papas",
            img: "papas.png",
          },
          {
            nombre: "Pimentón",
            img: "pimenton.png",
          },
          {
            nombre: "Tomate",
            img: "tomate.png",
          }
        ],
      })
})