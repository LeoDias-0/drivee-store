import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ResetCSS from './utils/ResetCSS'
import SignUpScreen from './pages/SignUpScreen'
import TopBar from './pages/TopBar'
import Home from './pages/Home'

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
            </Switch>
        </BrowserRouter>
    )
}

export default App