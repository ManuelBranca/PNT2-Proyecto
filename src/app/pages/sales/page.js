"use client";

import SalesList from "./SalesList";
import { useState, useEffect } from "react";

const SalesPage = () => {
    const [sales, setSales] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(30);

    useEffect(() => {
        fetch(`COMPLETAR`)
        .then((response) => response.json())
        .then((data) => {
            setSales(data);
        }).catch((error) => console.log(error));
    }, [page, pageSize]);

    return (
        <div>
            <div>
                <SalesList sales={sales} />
            </div>
            <div>
                <button 
                    onClick={() => setPage((prevPage) => prevPage - 1)} 
                    disabled={page === 1} 
                    style={{ color: 'red', fontWeight: 'bold' }}>
                    Anterior
                </button>
                <button 
                    onClick={() => setPage((prevPage) => prevPage + 1)} 
                    style={{ color: 'yellow', fontWeight: 'bold' }}>
                    Siguiente
                </button>
            </div>
        </div>
    );
}

export default SalesPage;
