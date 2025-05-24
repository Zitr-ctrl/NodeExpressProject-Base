import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;

// Usamos Express.static para vincular los archivos estaticos del proyecto
app.use(express.static("static"));
// Usamos Express.json para poder recibir datos en formato JSON
app.use(express.json());
// Usamos morgan para registrar las peticiones HTTP
app.use(morgan("dev"));

// Ruta de página principal
app.get("/", (req, res) => {
  res.render("index.html");
});

// Ruta de Productos
app.get("/products", (req, res) =>{
  res.send("Lista de productos")
})

// Ruta de Productos
app.post("/products", (req, res) =>{
  res.send("Creando productos")
})

// Ruta de Productos
app.put("/products", (req, res) =>{
  res.send("Actualizando productos")
})

// Ruta de Productos
app.delete("/products", (req, res) =>{
  res.send("Eliminando productos")
})

// Ruta de Productos
app.patch("/products", (req, res) =>{
  res.send("Actualizando una parte del producto")
})

// Ruta para devolver una imagen, pdf, excel o cualquier otro archivo
app.get("/myfile", (req, res) => {
  res.sendFile('/img/JavaScript-logo.png', {root: 'static'})
})

//Ruta para el envío de archivos JSON
app.get("/myfilejson", (req, res) => {
  res.json({
    name: "Josue Ortíz",
    age: 23,
    email: "ajosueramos@gmail.com",
    phone: "0997529265",
    address: {
      street: "Av. 25 de Julio",
      number: 123,
      city: "Milagro",
      state: "Guayas",
      country: "Ecuador"
    },
  })
})

//ruta para paginas no encontradas
app.use((req, res) =>{
  res.status(404).send("Page not found")
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
