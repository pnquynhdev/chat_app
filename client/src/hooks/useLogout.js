import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);

    await axios
      .post("/auth/logout")
      .then(() => {
        // localstorage
        localStorage.removeItem("chat-user");
        // authcontext
        setAuthUser(null);
      })
      .catch((error) => {
        toast.error(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { loading, logout };
};
export default useLogout;
