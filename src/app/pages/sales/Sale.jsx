"use client";

import Link from "next/link";
/*
MODIFICAR EN CASO DE SER NECESARIO
*/
function Sale(props) {
    return (
        <li>
            <div>
                <div>
                    <h1 style={{ fontWeight: 'bold' }}>Venta: {props.saleId}</h1>
                    <p><strong>Producto:</strong> {props.productName}</p>
                    <p><strong>Comprador:</strong> {props.customerName}</p>
                    <p><strong>Fecha:</strong> {props.saleDate}</p>
                    <p><strong>Total:</strong> ${props.totalAmount}</p>
                </div>
                <div>
                    <Link href={`/sales/details/${props._id}`} style={{ color: 'blueviolet', fontWeight: 'bold' }}>
                        Ver Detalles
                    </Link>
                    <Link href={`/sales/customer/${props.customerId}`} style={{ color: 'greenyellow', fontWeight: 'bold' }}>
                        Ver Comprador
                    </Link>
                </div>
            </div>
        </li>
    );
}

export default Sale;
