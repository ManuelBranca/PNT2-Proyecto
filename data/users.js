import getConnection from "./conn.js";
import { ObjectId } from "mongodb";
const DATABASE = "ORT-database";
const USERS = "users";

export async function addUser(user){
    console.log("Entro al addUser")
    user.password = await bcryptjs.hash(user.password, 10)
    const clientMongo = await getConnection();

    const result = clientMongo.db(DATABASE).collection(USERS).insertOne(user)
    return result;
}