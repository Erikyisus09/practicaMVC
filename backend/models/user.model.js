import { Schema, model } from "mongoose"


const esquema = new Schema({
    name: {
        type: String
    }
})


export const modelo = new model(
    "usuarios", esquema
)

