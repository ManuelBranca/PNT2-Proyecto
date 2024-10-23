"use client";

import UsuarioList from "./UsuarioList";
import { useState, useEffect } from "react"

const UserPage = () => {
    const [usuario, setUsuario] = useState([]);
    const [page,setPage] = useState(1);
    const [pageSize] = useState(30);

    useEffect(() => {
        fetch(``)
        .then((response) => response.json())
        .then((data) => {
            setUsuario(data);
        }). catch((error) => console.log(error));
    }, [page, pageSize]);

    return(
        <div>
            <div>
                <UsuarioList usuarios = {usuarios}/>
            </div>
            <div>
                <button onClick={() => setPage((prevPage) => prevPage -1)} disabled = {page === 1} style={{color: 'red', fontWeight: 'bold'}}>
                    Anterior
                </button>
                <button onClick={() => setPage((prevPage) => prevPage + 1)} style={{color: 'yellow', fontWeight: 'bold'}}>
                    Siguiente
                </button>
            </div>
        </div>
    )
}

export default UserPage;