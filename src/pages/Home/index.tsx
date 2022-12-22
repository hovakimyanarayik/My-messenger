import './style.css'
import React, { useState } from "react";
import Chats from './components/Chats';
import OpenedChat from './components/OpenedChat';



const Home: React.FC = () => {
    const [opened, setIsOpened] = useState<boolean>(false)


    return ( 
        <div className="home-wrapper">
            <Chats isOpen={opened} handleClose={() => setIsOpened(false)} />
            <OpenedChat handleOpenDrawer={() => setIsOpened(true)} />
        </div>
     );
}
 
export default Home;