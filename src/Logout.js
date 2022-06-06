import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import refresh from "./refresh";

const Logout = () => {
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    refresh(navigate("/"));
  }, []);
};
export default Logout;
