import React, { useMemo } from 'react';
import { UserChatItem } from '../../../../../types/userTypes';
import User from '../UsersList/User';

interface UserChatsListProps {
    userChats: UserChatItem[]
}

const UserChatsList: React.FC<UserChatsListProps> = ({userChats}) => {

    const sortedChats = useMemo(() => {
        return userChats.sort((a, b) => ((b[1].lastMessage?.date || b[1].date) - (a[1].lastMessage?.date || a[1].date)))
    }, [userChats])
    
    return (
        <div className='users-wrapper'>
            {sortedChats.map(([combinedId, {userInfo, lastMessage}]) => (
                <User 
                    key={combinedId} 
                    email={userInfo.email} 
                    name={userInfo.name}
                    photoURL={userInfo.photoURL}
                    uid={userInfo.uid}
                    lastMessage={lastMessage}
                />
            ))}
        </div>
     );
}
 
export default UserChatsList;