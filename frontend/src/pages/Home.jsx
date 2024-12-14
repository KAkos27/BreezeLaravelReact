import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const Home = () => {
  const { user } = useContext(AuthContext);

  return <div className="max-w-7xl mx-auto mt-12">{user?.name}</div>;
};

export default Home;
