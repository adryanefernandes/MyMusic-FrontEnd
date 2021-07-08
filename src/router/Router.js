import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"

function Router(){
  return <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <LoginPage />
      </Route>

      <Route exact path='/home'>
        <HomePage />
      </Route>

      <Route exact path='/signup'>
        <SignupPage />
      </Route>

    </Switch>
  </BrowserRouter>
}

export default Router