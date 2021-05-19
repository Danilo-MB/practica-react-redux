import React, {useEffect, useState} from 'react';

const UsersList = () => {

    const [showUsers, setShowUsers] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [showUsers])


    return ( 
        <>
        <button onClick={ () => setShowUsers(!showUsers)}>Show Users</button>
        <div hidden={showUsers === true}>
            {users.map(user => {
                return <pre key={user.index}>{JSON.stringify(user)}</pre>
            })}
        </div>
        </>
     );
}
 
export default UsersList;