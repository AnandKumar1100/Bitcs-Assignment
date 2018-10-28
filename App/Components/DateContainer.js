import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import * as commonConstants from '../Constants'
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class DateContainer extends Component {
    render() {
        const { orientation, shouldShowTextBox, style, date, dateText } = this.props;
        return (
            <View style={styles.dateContainer}>
                {orientation== commonConstants.RIGHT ? <Icon name="md-arrow-dropleft" size={deviceWidth/12.28} color='#495A6C' /> : null }
                <View style={styles.dateTextContainer}>
                    <Text style={styles.dateText}>{date}</Text>
                </View>
                {shouldShowTextBox ? <View style={styles.dateDescriptionContainer}>
                    <Text style={styles.dateDescription}>{dateText}</Text>
                </View>: null}
                {orientation == commonConstants.LEFT ?<Icon name="md-arrow-dropright" size={deviceWidth/12.28} color='#495A6C' /> : null }
            </View>
        );
    }
}