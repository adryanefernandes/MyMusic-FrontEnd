import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"

function Router(){
  return <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <LoginPage />
      </Route>

      <Route exact path='/home'>
        <HomePage />
      </Route>

    </Switch>
  </BrowserRouter>
}

export default Router