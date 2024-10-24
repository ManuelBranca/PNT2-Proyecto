"use client";

import Sale from "@/app/sales/Sale";

const SalesList = ({ sales }) => {
    return (
        <ul>
            {sales.map((sale) => (
                <Sale
                    key={sale._id}
                    _id={sale._id}
                    saleId={sale.saleId}
                    productName={sale.productName}
                    customerName={sale.customerName}
                    saleDate={sale.saleDate}
                    totalAmount={sale.totalAmount}
                    customerId={sale.customerId}
                />
            ))}
        </ul>
    );
}

export default SalesList;
