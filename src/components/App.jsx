import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ResetCSS from './utils/ResetCSS'
import SignUpScreen from './pages/SignUpScreen'
import TopBar from './pages/TopBar'
import Home from './pages/Home'
import SignInScreen from './pages/SignInScreen'

const App = () => {
    return (
        <BrowserRouter>
        <ResetCSS />
            <Switch>
                <Route from='/' exact>
                    <TopBar />
                    <Home />
                </Route>
                <Route from='/sign-up' exact>
                    <SignUpScreen />
                </Route>
                <Route from='/sign-in' exact>
                    <SignInScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App