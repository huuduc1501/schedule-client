import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import CreateClass from '../pages/CreateClass'
import CreateCluster from '../pages/CreateCluster'
import CreateRoom from '../pages/CreateRoom'
import Home from '../pages/Home'
import Container from '../styles/Container'

const index = () => {
    return (
        <Router>
            <NavBar />
            <SideBar />
            <Container>
                <Switch>
                    <Route path='/themlop'>
                        <CreateClass />
                    </Route>
                    <Route path='/themphong'>
                        <CreateCluster />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Container>

        </Router>
    );
};

export default index;