"use client";

import User from "@/app/users/User";

const UserList = ({ users }) => {
    return (
        <ul>
            {users.map((user) => (
                <User
                    key={user._id}
                    _id={user._id}
                    username={user.username}
                    name={user.name}
                    lastname={user.lastname}
                    email={user.email}
                />
            ))}
        </ul>
    );
}

export default UserList;
