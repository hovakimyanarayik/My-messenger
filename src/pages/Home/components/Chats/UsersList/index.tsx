import React from 'react';
import User from './User';
import { UserPropsWithId } from '../../../../../types/userTypes';

interface UsersListProps {
    users: UserPropsWithId[]
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
    
    return ( 
        <div className="users-wrapper">
            {users.map(user => (
                <User key={user.uid} {...user} lastMessage={null} />
            ))}
        </div>
     );
}
 
export default UsersList;