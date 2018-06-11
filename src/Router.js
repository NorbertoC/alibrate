import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Platform, StyleSheet } from 'react-native';
import Login from './components/Login';
import TopReviewers from './components/Ranking/TopReviewers';
import TopReaders from './components/Ranking/TopReaders';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        
        <Scene key="root" initial hideNavBar>
          <Scene key="login" component={Login} />
        </Scene>
        
        <Scene
          key="main"
          default="topReviewers"
          tabs={true}
          tabBarStyle={styles.tabBar}
          tabBarPosition={'top'}
          title="Ranking"
          labelStyle={{ fontSize: 14, fontWeight: 'bold' }}
          activeTintColor="#274762"
          inactiveTintColor="grey"
          indicatorStyle={{ backgroundColor: '#274762' }}
        >
          <Scene
            key="topReviewers"
            title="Los que más reseñan"
            hideNavBar={true}
            component={TopReviewers}
            initial={true}
          />
          <Scene
            key="topReaders"
            title="Los que más leen"
            hideNavBar={true}
            component={TopReaders}
          />
        </Scene>
      
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    borderTopColor: 'white',
    borderTopWidth: 1,
    backgroundColor: 'white',
  },
  navigationBarStyle: {
    backgroundColor: 'red',
  },
});

export default RouterComponent;
