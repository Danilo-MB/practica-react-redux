import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Body, Wrapper, ListElement } from './UserHistoryElements';

const UserHistory = () => {

    const users = useSelector(state => state.userInfo)

    // const [showUsers, setShowUsers] = useState(false);
    //const [users, setUsers] = useState([]);


/*     useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [showUsers]) */


    return ( 
        <Body>
            <Wrapper>
                <h3>User History</h3>
                {users.map(user => { 
                return <ListElement key={user.index}>{user.name} {user.lastName}</ListElement>})}
        </Wrapper>
        </Body>
     );
}
 
export default UserHistory;