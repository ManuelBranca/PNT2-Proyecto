"use client";

import UserList from "./UserList";
import { useState, useEffect } from "react";

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(30);

    useEffect(() => {
        fetch(`COMPLETAR`)
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
        }).catch((error) => console.log(error));
    }, [page, pageSize]);

    return (
        <div>
            <div>
                <UserList users={users} />
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

export default UserPage;
