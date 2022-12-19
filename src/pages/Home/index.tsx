import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";


const Home: React.FC = () => {
    const { logout } = useAuth()

    return ( 
        <div>
            <button onClick={logout}>Logout</button>
        </div>
     );
}
 
export default Home;