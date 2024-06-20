import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (email, password ) => {
    // const success = handleInputErrors({ email, password });
    // if (!success) return;
   
    setLoading(true);
    await axios
      .post("/auth/signin",{ email, password} )
      .then((res) => {
        localStorage.setItem("chat-user", JSON.stringify(res.data));
        setAuthUser(res.data);
      })
      .catch((error) => {
        toast.error(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { loading, login };
};

export default useLogin;

// function handleInputErrors({ email, password }) {
//   if (!email || !password) {
//     toast.error("Please fill in all fields");
//     return false;
//   }
//   return true;
// }
