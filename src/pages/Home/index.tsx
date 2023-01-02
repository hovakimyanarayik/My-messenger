import './style.css'
import React, { useState } from "react";
import Chats from './components/Chats';
import OpenedChat from './components/OpenedChat';



const Home: React.FC = () => {
    const [opened, setIsOpened] = useState<boolean>(true)

    function handleCloseDrawer() {
        setIsOpened(false)
    }

    function handleOpenDrawer() {
        setIsOpened(true)
    }

    return ( 
        <div className="home-wrapper">
            <Chats isOpen={opened} handleClose={handleCloseDrawer} />
            <OpenedChat handleOpenDrawer={handleOpenDrawer} />
        </div>
     );
}
 
export default Home;