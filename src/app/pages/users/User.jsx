"use client";

import Link from "next/link";

/*
MODIFICAR EN CASO DE SER NECESARIO
*/
function User(props) {
    return (
        <li>
            <div>
                <div>
                    <h1 style={{ fontWeight: 'bold' }}>{props.username}</h1>
                    <p><strong>Nombre:</strong> {props.name}</p>
                    <p><strong>Apellido:</strong> {props.lastname}</p>
                    <p><strong>Email:</strong> {props.email}</p>
                </div>
                <div>
                    <Link href={`/users/details/${props._id}`} style={{ color: 'blueviolet', fontWeight: 'bold' }}>
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </li>
    );
}

export default User;
