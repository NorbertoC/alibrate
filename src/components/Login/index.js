import React, { Component } from 'react';
import {
  Dimensions,
  Keyboard,
  View,
  TextInput,
  Text,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { userChanged, passwordChanged, loginUser } from '../../actions/index';
import { Button, Spinner } from '../common';
import L from '../../components/common/LayoutSize';
import Service from '../../provider/Service';

const screenWidth = Dimensions.get('window').width;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      loginError: '',
    };
    
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  
  onButtonPress() {
    const { user, password } = this.props;
    this.props.loginUser({ user, password }, this.onLoginSuccess.bind(this), this.onLoginError.bind(this));
    Keyboard.dismiss();
  }
  
  onLoginSuccess(response) {
    Service.setToken(response.access_token);
    Actions.reset('main');
  }
  
  onLoginError(error) {
    this.setState({ loginError: error })
    console.log('Error ger user data:', error);
  }
  
  renderButton() {
    return (
      <Button onPress={this.onButtonPress}>
        INGRESAR
      </Button>
    );
  }
  
  renderError(errorMessage) {
    return (
      <Text style={{ paddingLeft: L.w(20), color: 'white' }}>{errorMessage}</Text>
    );
  }
  
  inputProps() {
    return {
      underlineColorAndroid: '#000',
      style: { height: L.hProm(60), flex: 1, paddingLeft: 20 },
      autoCapitalize: 'none',
      autoCorrect: false,
    };
  }
  
  render() {
    const { loading, userError, passwordError } = this.props;
    const { inputContainerStyle } = styles;
    const { passwordVisible } = this.state;
    
    if(loading) {
      return <Spinner />
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>ALIBRATE</Text>
          </View>
          <View style={{ width: screenWidth, paddingHorizontal: L.w(20) }}>
            <View style={styles.inputTitleStyle}>
              <Text style={{ color: 'white' }}> E-mail (o usuario si ya eres miembro) </Text>
            </View>
            <View style={styles.inputContainerStyle}>
              <TextInput
                {...this.inputProps()}
                placeholder={'Ej: flor@mail.com'}
                onChangeText={(text) => { this.props.userChanged(text); }}
                value={this.props.user}
              />
            </View>
            {this.renderError(userError)}
            <View style={styles.inputTitleStyle}>
              <Text style={{ color: 'white' }}> Contraseña </Text>
            </View>
            <View style={inputContainerStyle}>
              <TextInput
                {...this.inputProps()}
                placeholder={'Ingresa tu contraseña'}
                secureTextEntry={!passwordVisible}
                onChangeText={(text) => { this.props.passwordChanged(text); }}
                value={this.props.password}
              />
            </View>
            <View style={{ marginTop: 10, }}>
              {this.renderButton()}
            </View>
          </View>
          {!!this.state.loginError &&
          <Text style={{ padding: L.w(20), color: 'red', fontSize: 16 }}>
            {this.state.loginError}
          </Text>}
        </View>
      )
    }
  }
}

const styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: L.h(20),
    marginTop: Platform.OS === 'ios' ? L.h(20) : 0,
    backgroundColor: '#264053',
  },
  titleContainer: {
    padding: L.w(50),
    
  },
  titleStyle: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 20,
  },
  inputTitleStyle: {
  
  }
};

const mapStateToProps = ({ authReducer }) => {
  const { user, password, loading, userError, passwordError } = authReducer;
  return { user, password, loading, userError, passwordError };
};

export default connect(mapStateToProps, {
  userChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
