import getConnection from "./conn.js";
import { ObjectId } from "mongodb";
const DATABASE = "ORT-database";
const USERS = "users";
import bcryptjs from "bcryptjs";

export async function addUser(user){
    console.log("Entro al addUser")
    
    if (!user.email) {
        throw new Error("El email es requerido");
    }
    if (!user.password) {
        throw new Error("La contraseña es requerida");
    }
    if (!user.name) {
        throw new Error("El nombre es requerido");
    }
    if (!user.lastname) {
        throw new Error("El apellido es requerido");
    }
    if (!user.username) {
        throw new Error("El username es requerido");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
        throw new Error("El email no es válido");
    }

    const userModel = {
        email: user.email,
        password: await bcryptjs.hash(user.password, 10),
        nombre: user.name,
        apellido: user.lastname,
        username: user.username,
        carrito: [] 
    };
    
    const clientMongo = await getConnection();

    const result = clientMongo.db(DATABASE).collection(USERS).insertOne(userModel)
    return result;
}