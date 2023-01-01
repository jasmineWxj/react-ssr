import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
    const click = () =>{
        console.log(1222);
    }
    return <div>
        home works 
        <button onClick={click}>点我一下</button>
        <Link to="/list">jump to list</Link>
    </div>
}

export default Home

