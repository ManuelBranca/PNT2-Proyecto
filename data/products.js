import getConnection from "./conn.js";
const DATABASE = "ORT-database";
const PRODUCTS = "products";

export async function addProduct(product) {
    console.log("Entro al addProduct");

    if (!product.name) {
        throw new Error("El nombre es requerido");
    }
    if (!product.description) {
        throw new Error("La descripción es requerida");
    }
    if (!product.category) {
        throw new Error("La categoría es requerida");
    }
    if (typeof product.price !== 'number' || product.price <= 0) {
        throw new Error("El precio es requerido y debe ser un número positivo");
    }
    if (!product.image) {
        throw new Error("La imagen es requerida");
    }

    const productModel = {
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        image: product.image,
    };

    const clientMongo = await getConnection();

    const result = await clientMongo.db(DATABASE).collection(PRODUCTS).insertOne(productModel);
    return result;
}