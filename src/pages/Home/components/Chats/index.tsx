import './style.css'
import React, { useEffect, useState } from 'react';
import Logo from '../../../../components/Logo';
import SearchUser from './SearchUser';
import UsersList from './UsersList';
import { UserPropsWithId } from '../../../../types/userTypes';
import useUsersBase from '../../../../hooks/useUsersBase';
import FoundedUsers from './FoundedUsers';


interface ChatsProps {
    isOpen: boolean
    handleClose: () => void
}

// Click aneluc amen User Chati vra gorcoxutyunna petq mtacel

const Chats: React.FC<ChatsProps> = ({isOpen, handleClose}) => {
    const [users, setUsers] = useState<UserPropsWithId[] | null>(null)
    const [searchedUsers, setSearchedUsers] = useState<UserPropsWithId[] | null>(null)
    const {getUsers, getByName} = useUsersBase()

    function handleSearchUser(value: string) {
        if(value.length) {
            getByName(value, setSearchedUsers)
        } else {
            setSearchedUsers(null)
        }
    }

    useEffect(() => {
        getUsers(setUsers)
    }, [])

    
    return (
        <div className={`chats-wrapper ${isOpen && 'open'}`}>
            <Logo size={32} />
            <SearchUser onSearch={handleSearchUser} />
            {searchedUsers && <FoundedUsers users={searchedUsers} />}
            {users?.length && <UsersList users={users}  />}
            <button 
                className='close-button chats-button'
                onClick={handleClose}
            >
                close
            </button>
        </div> 
    );
}
 
export default Chats;