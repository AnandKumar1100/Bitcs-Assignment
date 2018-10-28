import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import DateContainer from '../../Components/DateContainer'
import CombieDetails from '../../Components/CombieDetails'
import data from './data'
import * as commonConstants from '../../Constants'
import DeviceInfo from 'react-native-device-info';
import Slider from "react-native-slider";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const sliderInitialValue = 1998
const sliderFinalValue = 2018

const CombiDetails = ({  }) => {
    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.header} />
                <View style={{ marginTop: deviceHeight / 18, flex: 1, marginHorizontal: 20, flexDirection: 'row' }}>
                    <View style={styles.sliderContainer}>
                        <View style={styles.sliderValueContainer}>
                            <Text style={styles.sliderValue}>{sliderInitialValue}</Text>
                            <Text style={styles.sliderValue}>{sliderFinalValue}</Text>
                        </View>
                        <View style={styles.sliderLineContainer}>
                            <View style={styles.sliderLine}/>
                            <View style={styles.sliderCircle}/>
                        </View>
                    </View>
                    <View style={styles.flex_85}>
                    {!DeviceInfo.isTablet() ?
                    <View style={styles.flexDirection_row}>
                    <View style={styles.green_border}></View>
                    <Content style={styles.flex_1}>
                    {data.map((eachData, index) =><View key={index}>
                    <DateContainer orientation={commonConstants.RIGHT}  date={eachData.year}/>
                    <CombieDetails orientation={commonConstants.RIGHT} style={{height:deviceWidth/3, width: deviceWidth/2.8}} descriptionImage={eachData.descriptionImage} description={eachData.description}/>
                    <CombieDetails orientation={commonConstants.RIGHT} style={{height:deviceWidth/3, width: deviceWidth/2.8}} descriptionImage={eachData.descriptionImage} description={eachData.description}/>
                    <CombieDetails orientation={commonConstants.RIGHT} style={{height:deviceWidth/4.2, width: deviceWidth/4.2}} shouldShowImagesOnly={true} descriptionImage={eachData.descriptionImage} secondImage={eachData.secondImage}/>
                    <DateContainer orientation={commonConstants.RIGHT} shouldShowTextBox={true} style={{marginTop:8}} date={eachData.year} dateText={eachData.dateText}/>
                    </View>)}
                    <View style={styles.height20_57}></View>
                    </Content> 
                    </View>:
                        <Content style={styles.flex_1}>
                        {data.map((eachData, index)=>
                            <View key={index} style={styles.flexDirection_row}>
                            <View style={styles.leftView_tablet}>
                                <DateContainer orientation={commonConstants.LEFT} date={eachData.year} />
                                <CombieDetails orientation={commonConstants.LEFT} style={{ height: deviceWidth/5.30, width: deviceWidth/5.30 }} descriptionImage={eachData.descriptionImage} description={eachData.description} />
                            </View>
                            <View style={styles.tablet_border} />
                            <View style={styles.rightView_tablet}>
                                <CombieDetails orientation={commonConstants.RIGHT} style={{ height: deviceWidth/5.30, width: deviceWidth/5.30 }} descriptionImage={eachData.descriptionImage} description={eachData.description} />
                                <CombieDetails orientation={commonConstants.RIGHT} style={{ height: deviceHeight/9.76, width: deviceHeight/9.76 }} shouldShowImagesOnly={true} descriptionImage={eachData.descriptionImage} secondImage={eachData.secondImage} />
                                <DateContainer orientation={commonConstants.RIGHT} shouldShowTextBox={true} style={{ marginTop: 8 }} date={eachData.year} dateText={eachData.dateText} />
                            </View>
                            </View>)}
                            <View style={styles.height20_57}></View>
                        </Content>
                    }
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default CombiDetails