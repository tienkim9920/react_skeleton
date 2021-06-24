import React, { useEffect, useState } from 'react';
import SkeletonUsers from '../skeleton/SkeletonUsers';

function Users(props) {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const data = await res.json()
            console.log(data)
            setUsers(data)
        }, 3000)
    }, [])

    return (
        <div className="users">
            <h3>User Details</h3>

            {
                users && (
                    <div className="profile">
                        <h4>{users.name}</h4>
                        <p>{users.username}</p>
                        <a href="#">{users.website}</a>
                    </div>
                )
            }
            {
                !users && [1].map(n => <SkeletonUsers key={n} theme="light" />)
            }
        </div>
    );
}

export default Users;