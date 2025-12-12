import './Register.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { userContext } from './App'
import { useContext } from 'react'

function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [found, setFound] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useContext(userContext)

    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("http://localhost:3001/users")
            const data = await res.json()
            setUsers(data)
        }
        fetchUsers()
    }, [])

    async function handleRegister(e) {
        const user = { username, password }
        e.preventDefault()

        if (users.some(user => user.username === username)) {
            setFound(true)
            return
        }
        try {
            const res = await fetch("http://localhost:3001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            if (!res.ok) {
                throw new Error("Failed to register user")
            }
            else {
                alert("User registered successfully")
                setUser(user)
                navigate("/Display")
            }
        }
        catch (err) {
            console.log(err)
            setError(true)
        }
    }


    return (
        <div className="register-container">
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleRegister}>
                <input type="text" placeholder="Username" className="register-input" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="register-input" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="register-btn">Register</button>
            </form>
            {error && <p style={{ color: "red", marginTop: "1rem" }}>Login failed</p>}
            {found && <p style={{ color: "red", marginTop: "1rem" }}>Username already exists</p>}
        </div>
    )
}
export default Register