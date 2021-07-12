import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import CreateMusicPage from "../pages/createMusic/CreateMusicPage"

function Router(){
  return <BrowserRouter>
    <Switch>
      <Route exact path='/login'>
        <LoginPage />
      </Route>

      <Route exact path='/'>
        <HomePage />
      </Route>

      <Route exact path='/signup'>
        <SignupPage />
      </Route>

      <Route exact path='/create/music'>
        <CreateMusicPage />
      </Route>

    </Switch>
  </BrowserRouter>
}

export default Router