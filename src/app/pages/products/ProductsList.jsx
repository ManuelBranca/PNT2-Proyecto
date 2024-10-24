"use client";

import Product from "@/app/products/Product";

const ProductsList = ({ products }) => {
    return (
        <ul>
            {products.map((product) => (
                <Product
                    key={product._id}
                    _id={product._id}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                />
            ))}
        </ul>
    );
}

export default ProductsList;
