import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ResetCSS from './utils/ResetCSS'
import SignUpScreen from './pages/SignUpScreen'
import TopBar from './pages/TopBar'
import Home from './pages/Home'
import SignInScreen from './pages/SignInScreen'
import CheckoutScreen from './pages/CheckoutScreen'
import ItemScreen from './pages/ItemScreen'

const App = () => {
    const cartList = [{name: 'product', qty: 2, price: 1299}]

    return (
        <BrowserRouter>
        <ResetCSS />
            <Switch>
                <Route from='/' exact>
                    <TopBar/>
                    <Home />
                </Route>
                <Route from='/item/:id' exact>
                    <TopBar/>
                    <ItemScreen/>
                </Route>
                <Route from='/sign-up' exact>
                    <SignUpScreen />
                </Route>
                <Route from='/sign-in' exact>
                    <SignInScreen />
                </Route>
                <Route from='/checkout' exact>
                    <CheckoutScreen cartList={cartList}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App