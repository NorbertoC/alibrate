import React, { Component } from 'react';
import {
  Dimensions,
  Keyboard,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
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
    Actions.reset('welcome');
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
      <Text style={{ paddingLeft: L.w(5), color: 'red' }}>{errorMessage}</Text>
    );
  }
  
  inputProps() {
    return {
      underlineColorAndroid: '#000',
      style: { height: L.hProm(60), flex: 1 },
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
        <KeyboardAvoidingView behavior="position" style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ width: screenWidth, paddingHorizontal: L.w(30) }}>
              <View style={styles.inputContainerStyle}>
                <TextInput
                  {...this.inputProps()}
                  placeholder={'Ej: flor@mail.com'}
                  onChangeText={(text) => { this.props.userChanged(text); }}
                  value={this.props.user}
                  keyboardType="numeric"
                />
              </View>
              {this.renderError(userError)}
              <View style={inputContainerStyle}>
                <TextInput
                  {...this.inputProps()}
                  placeholder={'Ingresa tu contraseña'}
                  secureTextEntry={!passwordVisible}
                  onChangeText={(text) => { this.props.passwordChanged(text); }}
                  value={this.props.password}
                />
              </View>
              {this.renderError(passwordError)}
              {this.renderButton()}
            </View>
          </TouchableWithoutFeedback>
          {!!this.state.loginError &&
          <Text>
            {this.state.loginError}
          </Text>}
        </KeyboardAvoidingView>
      )
    }
  }
}

const styles = {
  container: {
    alignItems: 'center',
    paddingBottom: L.h(50),
    marginTop: Platform.OS === 'ios' ? L.h(20) : 0,
  },
  inputContainerStyle: {
    flexDirection: 'row',
  },
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
