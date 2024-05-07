import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="h-screen bg-[url('./public/bg.jpg')] bg-cover bg-center bg-no-repeat">

      {/* <Login /> */}
      {/* <Signup /> */}
      <HomePage />
    </div>
  );
}

export default App;
