import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from "react-redux";
import { Spinner } from '../common';
import { getTopReadersData } from "../../actions";

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
  }
  
  componentDidMount() {
    if (!this.props.topReaders) {
      this.props.getTopReadersData(this.successCallback, this.errorCallback);
    }
  }
  
  successCallback(response) {
    console.log('success topReaders: ', response);
  }
  
  errorCallback(error) {
    console.log('error: ', error);
  }
  
  render() {
    const { topReaders, loading } = this.props;
    debugger
    
    if (loading) {
      return <Spinner/>
    } else {
      return (
        <View style={styles.container}>
          <Text> HOLA </Text>
        </View>
      );
    }
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'green',
  },
};

const mapStateToProps = ({ detailsReducer }) => {
  const { topReaders, loading } = detailsReducer;
  return { topReaders, loading };
};

export default connect(mapStateToProps, { getTopReadersData })(Main);
