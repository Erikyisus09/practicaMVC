import mongoose from "mongoose";
import express from "express"; //express crea un servidor 
import cors from "cors"; //cors le da seguridad al servidor 
import dotenv from "dotenv" // dotenv manda a llamar los archivos .env todas se instalan con npm i express cors dotenv
import {test} from "./backend/controllers/user.controller.js"; // hace que el controlador se importe hacian el proyecto 

dotenv.config(); // activa el dotenv 

mongoose.connect(process.env.url)// el proces.env.url conecta mongoose con la url de tu base de datos 
.then(()=>{ 
console.log("jalo")})

.catch((error)=>{
console.log("no jalo", error)})

const app = express(); // activa exprees 
app.use(cors());// usa cors es para usar una libreria dentro de express 

app.listen(4001, ()=>{
    console.log("Funciona el server")
} )// Aqui se escucha el servidor para saber si esta funcionando 



test() // activa el import del test

