import React from 'react'
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./authentication/Login"
import Signup from "./authentication/Signup"
import Dashboard from './table/Dashboard'
import PrivateRoute from "./routing/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateEmail from "./authentication/UpdateEmail"
import { AppDiv } from './styles/App.style'
//TODO: Styling: App (application container)
//TODO: Styling: Login
//TODO: Styling: Signup
//TODO: Styling: ForgotPassword
//TODO: Styling: UpdateEmail
//TODO: Styling: Dashboard
const App = () => {
  return (
    <AuthProvider>
        <AppDiv>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <Route path='/signup' component={Signup} />
                <Route exact path='/' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
                <Route path='/update-email' component={UpdateEmail} />
              </Switch>
            </AuthProvider>
          </Router>
        </AppDiv>
    </AuthProvider>
  )
}

export default App