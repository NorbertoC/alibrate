import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import Main from './components/Main';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        
        <Scene key="root" initial hideNavBar>
          <Scene key="login" component={Login} />
        </Scene>
  
        <Scene key="welcome" tabs={true} hideNavBar>
          <Scene
            key="main"
            title="My Tab"
          >
            <Scene key="myTab_1" component={Main} />
            <Scene key="myTab_2" component={Main} />
          </Scene>
        </Scene>
        
      </Scene>
    </Router>
  );
};

export default RouterComponent;
