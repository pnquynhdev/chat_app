import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({ username, email, password, confirmPassword }) => {
    const success = handleInputErrors({
      username,
      email,
      password,
      confirmPassword,
    });
    if (!success) return;
    setLoading(true);
    await axios
      .post("/auth/signup", {
        email,
        password,
        confirmPassword,
        username,
      })
      .then((res) => {
        // localstorage
      localStorage.setItem("chat-user", JSON.stringify(res.data));
        // authcontext
        setAuthUser(res.data)
      
      })
      .catch((error) => {
        toast.error(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { loading, signup };
};
export default useSignup;

function handleInputErrors({ email, password, confirmPassword }) {
  if (!email || !password || !confirmPassword) {
    toast.error("please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
