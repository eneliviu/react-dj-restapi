import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  // useContext hook to pass user state as a prop down the component tree
  // first, useContext hook to persist the state of the  currently logged in user.
  const [currentUser, setCurrentUser] = useState(null);  // as props to Context hooks
  // make network requests when the component mounts.
  const handleMount = async () => {
    try {
      // make a GET request  to the user endpoint
      // destructure the data property in place
      const { data } = await axios.get("dj-rest-auth/user/");
      // set the currentUser to data
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  // use the useEffect hook to have code run when a component mounts
  // and pass it an empty dependency array
  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>

      {/* currentUser and setCurrentUser are now available to every child in the App.js */}
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
