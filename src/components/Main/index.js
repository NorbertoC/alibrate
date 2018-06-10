import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from "react-redux";
import { getTopReadersData, getTopReviewersData } from "../../actions";

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
  }
  
  componentDidMount() {
    this.props.getTopReadersData(this.successCallback, this.errorCallback);
    this.props.getTopReviewersData(this.successCallback, this.errorCallback);
  }
  
  successCallback(response) {
    console.log('success response: ', response);
  }
  
  errorCallback(error) {
    console.log('error: ', error);
  }
  
  render() {
    const { topReviewers, topReaders } = this.props;
    debugger
    
    return (
      <View style={styles.container}>
        <Text> HOLA </Text>
      </View>
    );
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
  const { topReviewers, topReaders } = detailsReducer;
  return { topReviewers, topReaders };
};

export default connect(mapStateToProps, { getTopReadersData, getTopReviewersData })(Main);
