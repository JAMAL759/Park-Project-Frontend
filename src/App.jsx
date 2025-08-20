import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './components/auth/loginPAge'
import SignUp from './components/auth/signUpForm'
import ListAdminPage from './components/Admin/homePage/ListHomePageAdmin'

function LogoutButton({ onLogout }) {
  return (
    <button onClick={onLogout}>
      Logout
    </button>
  )
}

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  function handleLogin(newToken) {
    setToken(newToken)
    localStorage.setItem('token', newToken)
  }

  function handleLogout() {
    setToken(null)
    localStorage.removeItem('token')
  }

  if (token) {
    const decodedToken = jwtDecode(token)
    console.log(decodedToken)
  }

  return (
    <Router>
      <div>
        {token ? <LogoutButton onLogout={handleLogout} /> : null}
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admins" element={<ListAdminPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
