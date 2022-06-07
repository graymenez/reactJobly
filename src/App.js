import "./App.css";
import { useEffect, useState } from "react";
import MainRoutes from "./MainRoutes";
import getUser from "./GetUser";
function App() {
  const userToken = localStorage.getItem("_token");
  const [currentUser, setCurrentUser] = useState(false);
  const [token, setToken] = useState(userToken);

  useEffect(() => {
    if (token) {
      // If there is a token, call getUser() funtion, which will get the current users details
      try {
        let setUser = async () => {
          let user = await getUser();

          localStorage.setItem("_userD", JSON.stringify(user));

          setCurrentUser(user);
          // Save the current users details to localstorage "_userD" && currentUser state.
        };
        setUser();
      } catch (e) {
        //Handles and throws any errors
        throw new Error(e);
      }
    } else {
      //If no token, clears localStorage of any left data
      localStorage.clear();
    }
  }, []);

  return (
    <div className="App">
      <MainRoutes token={token} currentUser={currentUser} />
    </div>
  );
}

export default App;
