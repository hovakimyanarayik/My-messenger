import './style.css'
import React, { useEffect, useState } from "react";
import Chats from './components/Chats';
import OpenedChat from './components/OpenedChat';
import { useParams } from 'react-router-dom';



const Home: React.FC = () => {
    const [opened, setIsOpened] = useState<boolean>(true)
    const params = useParams()

    useEffect(() => {
        if(params.slug) {
            setIsOpened(false)
        }

        // eslint-disable-next-line
    }, [params.slug])

    function handleCloseDrawer() {
        setIsOpened(false)
    }

    function handleOpenDrawer() {
        setIsOpened(true)
    }

    useEffect(() => {
        document.title = 'Messenger: Home'
    }, [])

    return ( 
        <div className="home-wrapper">
            <Chats isOpen={opened} handleClose={handleCloseDrawer} />
            <OpenedChat handleOpenDrawer={handleOpenDrawer} />
        </div>
     );
}
 
export default Home;