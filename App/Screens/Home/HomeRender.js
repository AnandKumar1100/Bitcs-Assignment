import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base'
import * as constants from './constants'
import styles from './styles';

const Home = ({ toggleInnerContent, innerContentIndex }) => {
    return (
        <Container>
            <Content contentContainerStyle={ styles.container }>
                <View style={ styles.padding_15 }>
                    {constants.dummyData.map((eachData, index) =>
                        <View key={index}>
                            <TouchableOpacity activeOpacity={0.3} onPress={()=>toggleInnerContent(index)} style={ styles.mainContentContainer }>
                                <View style={ styles.yearContainer }>
                                    <Text style={ styles.year }>{eachData.year}</Text>
                                </View>
                                <View style={ styles.descriptionContainer }>
                                    <Text style={ styles.description } numberOfLines={3}>{eachData.description}</Text>
                                </View>
                            </TouchableOpacity>
                            {innerContentIndex == index ? <ScrollView horizontal={true}>
                                {constants.innerContent.map((eachContent, index) => <View key={index} style={styles.marginTop_8}>
                                    {eachContent.type == 'image' ? <Image source={ eachContent.content } style={ styles.innerContentImage} />
                                    : <View style={ styles.innerContentTextContainer }>
                                        <Text style={styles.innerContentText} numberOfLines={3}>{eachContent.content}</Text>
                                    </View> }
                                </View>)}
                            </ScrollView> : null }
                            <View style={styles.greenBorder} />
                        </View>)}
                </View>
            </Content>
        </Container>
    )
}

export default Home