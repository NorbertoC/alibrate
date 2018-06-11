import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from "react-redux";
import { Spinner } from '../common';
import { getTopReviewersData } from "../../actions";

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
  }
  
  componentDidMount() {
    if (!this.props.topReviewers) {
      this.props.getTopReviewersData(this.successCallback, this.errorCallback);
    }
  }
  
  successCallback(response) {
    console.log('success topReviewers: ', response);
  }
  
  errorCallback(error) {
    console.log('error: ', error);
  }
  
  render() {
    const { topReviewers, loading } = this.props;
    debugger
  
    if(loading) {
      return <Spinner />
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
    backgroundColor: 'blue',
  },
};

const mapStateToProps = ({ detailsReducer }) => {
  const { topReviewers, loading } = detailsReducer;
  return { topReviewers, loading };
};

export default connect(mapStateToProps, { getTopReviewersData })(Main);
