import getConnection from "./conn.js";
// import {objetId} from "mongodb";
const DATABASE = "ORT-database";
const USERS = "users";
const SALES = "sales";

export async function addSale(sale){
    console.log("Entro en addSale");

    if(!sale.userId){
        throw new Error("El ID del usuario es requerido");
    }

    if(!sale.products || !Array.isArray(sale.products) || sale.products.length === 0){
        throw new Error("Se requiere una lista de productos");
    }

    const saleModel = {
        userId: new ObjectId(sale.userId),
        products: sale.products.map(product => ({
            productId: new ObjectId(product.productId),
            quantity: product.quantity,
            price: product.price
        })),
        total: sale.total,
        date: new Date()
    };

    const clientMongo = await getConnection();

    const result = await clientMongo.db(DATABASE).collection(SALES).insertOne(saleModel);

    await clientMongo.db(DATABASE).collection(USERS).updateOne(
        {_id: new ObjectId(sale.userId)},
        {$push: {sales: saleModel}}
    );

    return result;
}