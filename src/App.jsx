import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginForm from "./components/auth/loginPAge"
import AddminListPage from "./components/Admin/ListAdmin/listAllAdmin"
import SignUp from "./components/auth/signUpForm"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp/>} />
        <Route path="/admin" element={<AddminListPage />} />
        <Route path="/customer" element={<h1>Welcome Customer</h1>} />
      </Routes>
    </Router>
  )
}

export default App
