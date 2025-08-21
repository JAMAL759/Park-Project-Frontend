import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('customer') 
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const url = userType === 'admin'
        ? 'http://localhost:3000/auth/login/admin'
        : 'http://localhost:3000/auth/login/customer'

      const res = await axios.post(url, { email, password })
      
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('type', res.data.type)

      onLogin(res.data.token)

      if (res.data.type === 'admin') {
        navigate('/admin')
      } else {
        navigate('/customer')
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <select value={userType} onChange={e => setUserType(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
      </select>
      <input 
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input 
        placeholder="Password"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm