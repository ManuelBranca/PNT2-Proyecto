"use client";

import Usuario from "@/app/usuario/Usuario";

const UsuarioList = (a) => {
    return (
        <ul>
            {a.usuario.map((usuario) =>(
                <Usuario 
                    
                />
            ))}
        </ul>
    )
}

export default UsuarioList;