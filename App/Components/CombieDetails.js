import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import * as commonConstants from '../Constants'
import DeviceInfo from 'react-native-device-info';
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CombieDetails extends Component {

    render() {
        const { orientation, style, shouldShowImagesOnly, descriptionImage, description, secondImage } = this.props;
        return (<View style={styles.marginTop51_42}>
            {orientation == commonConstants.LEFT ? <View style={styles.baseContainer}>
            {shouldShowImagesOnly ? <Image source={secondImage} style={{ resizeMode: 'cover', ...style }} /> :
                <View style={[ styles.descriptionContainer, {...style} ]}>
                    <Text numberOfLines={6} style={styles.description}>{description}</Text>
                </View>}
                <Image source={descriptionImage} style={{ resizeMode: 'cover', ...style }} />
                <Icon name="md-arrow-dropright" size={deviceWidth/12.29} color='green' />
            </View> :
                <View style={styles.baseContainer}>
                    <Icon name="md-arrow-dropleft" size={deviceWidth/12.29} color='green' />
                    <Image source={descriptionImage} style={{ resizeMode: 'cover', ...style }} />
                    {shouldShowImagesOnly ? <Image source={secondImage} style={{ resizeMode: 'cover', ...style }} /> :
                    <View style={[styles.descriptionContainer, {...style}]}>
                        <Text numberOfLines={6} style={{ fontSize:!DeviceInfo.isTablet() ? deviceWidth/35 : deviceWidth/63 }}>{description}</Text>
                    </View>}
        </View>}
        </View>
        );
    }
}