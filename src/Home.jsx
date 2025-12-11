import { useState } from "react"
import './Home.css'
import { useNavigate } from "react-router-dom"
function Home() {

    const [playlist, setPlaylist] = useState(false)
    const navigate = useNavigate()

    function handleStart() {
        setPlaylist(true)
        navigate('/Display')
    }
    return (
        <div>
            <h1>Bashify</h1>
            <p>Curate your Playlist</p>
            <button onClick={handleStart}>Start</button>
            {playlist && <p>Entering playlist mode...</p>}
        </div>
    )
}

export default Home;
