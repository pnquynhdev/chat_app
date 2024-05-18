import "./App.css";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Logo from "./components/Logo";

function App() {
  return (
    <div className="min-h-screen min-w-max bg-[url('./public/bg.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
      {/* <Logo /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <HomePage /> */}
      <ChatPage/>
    </div>
  );
}

export default App;
