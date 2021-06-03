import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import NavBar from '../components/NavBar'
import ScheduleModel from '../components/ScheduleModel'
import SideBar from '../components/SideBar'
import Cluster from '../pages/Cluster'
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
                    <Route path='/test'>
                        <ScheduleModel />
                    </Route>
                    <Route path='/:clusterId'>
                        <Cluster />
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