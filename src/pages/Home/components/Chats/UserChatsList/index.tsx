import React from 'react';
import { UserChatItem } from '../../../../../types/userTypes';
import User from '../UsersList/User';

interface UserChatsListProps {
    userChats: UserChatItem[]
}

const UserChatsList: React.FC<UserChatsListProps> = ({userChats}) => {
    return (
        <div className='users-wrapper'>
            {userChats.map(([combinedId, {date, userInfo}]) => (
                <User 
                    key={combinedId} 
                    email={userInfo.email} 
                    name={userInfo.name}
                    photoURL={userInfo.photoURL}
                    uid={userInfo.uid}
                />
            ))}
        </div>
     );
}
 
export default UserChatsList;