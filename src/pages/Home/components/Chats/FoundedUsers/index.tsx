import React from 'react';
import { UserPropsWithId } from '../../../../../types/userTypes';
import UsersList from '../UsersList';

interface FoundedUsersProps {
    users: UserPropsWithId[]
}

const FoundedUsers:React.FC<FoundedUsersProps> = ({users}) => {
    console.log( 'foundedusers',users);
    
    return ( 
        <div className='founded-users'>
            {
                users.length ? (
                    <>
                        <p>Results</p>
                        <UsersList users={users} />
                    </>
                ) : (
                    <p>No results...</p>
                )
            }
        </div>
     );
}
 
export default FoundedUsers;