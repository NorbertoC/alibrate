import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import L from './LayoutSize';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  showBackIcon() {
    const { backIcon } = this.props;
    const { headerIconStyle, iconContainer } = styles;
    if (backIcon) {
      return (
        <TouchableOpacity
          onPress={() => Actions.pop()}
          style={iconContainer}
        >
          <Icon name="chevron-left" size={L.h(22)} color="white" style={headerIconStyle} />
        </TouchableOpacity>
      )
    }
    return null;
  }
  
  render() {
    const { title } = this.props;
    const { viewStyleContainer, titleContainer, titleStyle, container } = styles;
    
    return (
      <View style={[container, this.props.style]}>
        <View style={viewStyleContainer}>
          {this.showBackIcon()}
          <View style={titleContainer}>
            <Text style={titleStyle}>
              {title}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'grey',
    height: L.hProm(60),
    marginTop: Platform.OS === 'ios' ? L.h(20) : 0,
  },
  viewStyleContainer: {
    marginTop: L.h(8),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIconStyle: {
    paddingVertical: L.h(10),
    paddingLeft: L.w(15),
    paddingRight: L.w(17),
  },
  iconContainer: {
    paddingHorizontal: L.hProm(5),
    marginTop: L.h(2),
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 80,
  },
  titleStyle: {
    fontSize: 24,
    color: '#fff',
  },
};

export default Header;
