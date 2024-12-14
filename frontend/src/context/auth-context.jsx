import { createContext, useCallback, useEffect, useState } from "react";
import { myAxios } from "../api/axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const csrf = () => myAxios.get("/sanctum/csrf-cookie");

  const getUser = useCallback(async () => {
    const { data } = await myAxios.get("api/user");
    setUser(data);
  }, [setUser]);

  const login = async (payload) => {
    setError([]);
    await csrf();
    try {
      await myAxios.post("/login", payload);
      await getUser();
      navigate("/");
    } catch (error) {
      error.response.status === 422 && setError(error.response.data.errors);
    }
  };

  const register = async (payload) => {
    setError([]);
    await csrf();
    try {
      await myAxios.post("/register", payload);
      await getUser();
      navigate("/");
    } catch (error) {
      error.response.status === 422 && setError(error.response.data.errors);
    }
  };

  const logout = () => {
    myAxios.post("/logout").then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  return (
    <AuthContext.Provider
      value={{ user, error, getUser, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
