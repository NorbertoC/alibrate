import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
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
  
  renderUsers() {
    const { topReviewers } = this.props;
    if(topReviewers) {
      const usersInfo = topReviewers.map((user, index) => {
        const userNumber = index + 1;
        const reviews = `${user.countReviews} reseñas`;
        return (
          <View key={index} style={styles.userContainer}>
            <Text style={styles.userNumberStyle}>
              {userNumber}
            </Text>
            <Image
              source={{ uri: user.profile.picture }}
              style={styles.imgStyle}
            />
            <View style={styles.userInfoContainer}>
              <Text style={styles.userNameStyle}>
                {user.username}
              </Text>
              <Text style={styles.userReviewStyle}>
                {reviews}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.buttonText}>
                  Seguir
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      });
      return (
        <ScrollView alwaysBounceVertical={false}>
          {usersInfo}
        </ScrollView>
      )
    }
    return null;
  }
  
  render() {
    const { loading } = this.props;
    
    if(loading) {
      return <Spinner />
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.usersCount}>
            <Text style={styles.userCountText}>
              100 usuarios que más reseñan en Alibrate
            </Text>
          </View>
          {this.renderUsers()}
        </View>
      );
    }
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  usersCount: {
    height: 60,
    backgroundColor: '#EEEEEE',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userCountText: {
    marginLeft: 20,
    color: '#ABABAB',
    fontSize: 13,
  },
  userContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userNumberStyle: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 100/4,
  },
  userNameStyle: {
    color: '#2D485F',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginBottom: 5,
  },
  userReviewStyle: {
    color: '#62B6E0',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  buttonContainer: {
    position: 'absolute',
    right: 10,
  },
  followButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2D485F',
    height: 35,
    width: 65,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2D485F',
  },
};

const mapStateToProps = ({ detailsReducer }) => {
  const { topReviewers, loading } = detailsReducer;
  return { topReviewers, loading };
};

export default connect(mapStateToProps, { getTopReviewersData })(Main);
