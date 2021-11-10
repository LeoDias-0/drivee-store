import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route from='/' exact>
                    Work in Progress!
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App