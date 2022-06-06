import "./App.css";
import { useEffect, useState } from "react";
import MainRoutes from "./MainRoutes";
import getUser from "./GetUser";
function App() {
  const userToken = localStorage.getItem("_token");
  const [currentUser, setCurrentUser] = useState(false);
  const [token, setToken] = useState(userToken);
  /** If there is a token, call getUser() funtion which will get the current users details
   * Then save the current users details to currentUser state
   */
  useEffect(() => {
    if (token) {
      let setUser = async () => {
        let user = await getUser();
        setCurrentUser(user);
      };
      setUser();
    }
  }, []);

  return (
    <div className="App">
      <MainRoutes token={token} currentUser={currentUser} />
    </div>
  );
}

export default App;
