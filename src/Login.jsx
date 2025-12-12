import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3001/users")
            const data = await res.json()
            const user = data.find(user => user.username === username && user.password === password)
            if (user) {
                setError(false)
                navigate("/display")
            }
            else {
                setError(true)
            }
        }
        catch (err) {
            console.log(err)
            setError(true)
        }
    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Username" className="login-input" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="login-input" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="login-btn">Login</button>
            </form>
            {error && <p style={{ color: "red", marginTop: "1rem" }}>Login failed</p>}
        </div>
    )
}
export default Login