const express = require("express");
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

//Alamcenamiento de frases
let frases = [
  { texto: "La vida es bella." },
  { texto: "El conocimiento es poder." },
  { texto: "La práctica hace al maestro." },
  { texto: "El tiempo es oro." },
  { texto: "La paciencia es una virtud." },
  { texto: "El amor todo lo puede." },
  { texto: "La risa es el mejor remedio." },
  { texto: "El respeto se gana, no se impone." },
  { texto: "La honestidad es la mejor política." },
  { texto: "El éxito es la suma de pequeños esfuerzos." },
];

//Saludo inicial
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de Frases!");
});

//Devolver todas las frases
app.get("/random/quotes", (req, res) => {
  res.json(frases);
});

//Devolver una frase aleatoria
app.get("/random/quotes/random", (req, res) => {
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  res.json(fraseAleatoria);
});

//Agregar una nueva frase
app.post("/random/quotes", (req, res) => {
  const nuevaFrase = req.body;
  if (nuevaFrase && nuevaFrase.texto) {
    frases.push(nuevaFrase);
    res.status(201).json({ message: "Frase agregada exitosamente." });
  } else {
    res.status(400).json({ message: "Frase inválida." });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log("Servidor escuchando en http://localhost:" + port);
});
