import './Home.css'
import { useNavigate } from "react-router-dom"
function Home() {

    const navigate = useNavigate()

    function handleLogin() {
        navigate('/login')
    }
    function handleRegister() {
        navigate('/register')
    }
    return (
        <div>
            <h1>Bashify</h1>
            <p>Curate your Playlist</p>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}

export default Home;
