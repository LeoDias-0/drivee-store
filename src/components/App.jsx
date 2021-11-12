import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ResetCSS from './utils/ResetCSS'
import SignUpScreen from './pages/SignUpScreen'

const App = () => {
    return (
        <BrowserRouter>
        <ResetCSS />
            <Switch>
                <Route from='/' exact>
                    Work in Progress
                </Route>
                <Route from='/sign-up' exact>
                    <SignUpScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App