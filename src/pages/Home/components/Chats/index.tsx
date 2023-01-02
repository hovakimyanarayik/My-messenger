import './style.css'
import React, { useEffect, useState } from 'react';
import Logo from '../../../../components/Logo';
import SearchUser from './SearchUser';
import { UserChatItem, UserPropsWithId } from '../../../../types/userTypes';
import useUsersBase from '../../../../hooks/useUsersBase';
import FoundedUsers from './FoundedUsers';
import useUserChats from '../../../../hooks/useUserChats';
import UserChatsList from './UserChatsList';
import CurrentUserInfo from './CurrentUserInfo';
import ChatsWrapper from './ChatsWrapper';


interface ChatsProps {
    isOpen: boolean
    handleClose: () => void
}


const Chats: React.FC<ChatsProps> = ({isOpen, handleClose}) => {
    const [userChats, setUserChats] = useState<UserChatItem[] | null>(null)
    const [searchedUsers, setSearchedUsers] = useState<UserPropsWithId[] | null>(null)
    const { getByName} = useUsersBase()
    const { getUserChatsList } = useUserChats()

    function handleSearchUser(value: string) {
        if(value.length) {
            getByName(value, setSearchedUsers)
        } else {
            setSearchedUsers(null)
        }
    }

    useEffect(() => {
        getUserChatsList(setUserChats)
    }, [])
    
    return (
        <ChatsWrapper handleClose={handleClose} isOpen={isOpen}>
            <Logo size={32} />
            <CurrentUserInfo />
            <SearchUser onSearch={handleSearchUser} />
            {searchedUsers && <FoundedUsers users={searchedUsers} />}
            {userChats?.length ? <UserChatsList userChats={userChats} /> : null}
        </ChatsWrapper> 
    );
}
 
export default Chats;