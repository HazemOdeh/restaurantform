import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { SignUp } from "./components/pages/auth/Signup";
import { Login } from "./components/pages/auth/Login";
import "./i18n";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />{" "}
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
