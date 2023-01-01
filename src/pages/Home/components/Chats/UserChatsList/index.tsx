import React, { useMemo } from 'react';
import { UserChatItem } from '../../../../../types/userTypes';
import User from '../UsersList/User';

interface UserChatsListProps {
    userChats: UserChatItem[]
}

const UserChatsList: React.FC<UserChatsListProps> = ({userChats}) => {

    const sortedChats = useMemo(() => {
        return userChats.sort((a, b) => (a[1].date.seconds - b[1].date.seconds))
    }, [userChats])
    
    return (
        <div className='users-wrapper'>
            {sortedChats.map(([combinedId, {date, userInfo}]) => (
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