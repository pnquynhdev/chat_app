import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import axios from "axios";
// import Logo from "./components/Logo";
import { useAuthContext } from "./context/AuthContext";

function App() {
  axios.defaults.baseURL = "http://localhost:8000/api";
  axios.defaults.withCredentials = true;
  const { authUser } = useAuthContext();
  return (
    <div className="min-h-screen min-w-max bg-[url('./public/bg.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/chat" /> : <Signup />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/chat" /> : <Login />}
        />{" "}
        <Route
          path="/logout"
          element={authUser ? <ChatPage /> : <Navigate to="/" />}
        />
        <Route
          path="/chat"
          element={authUser ? <ChatPage /> : <Navigate to="/login" />}
        />
        {/* <Logo /> */}
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <HomePage /> */}
        {/* <ChatPage/>*/}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
