import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


const index = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                </Route>
            </Switch>
        </Router>
    );
};

export default index;