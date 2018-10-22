import { StyleSheet, Dimensions, Platform } from 'react-native'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const platform = Platform.OS;

const Styles = {
    container:{
        flexGrow: 1,
    },
    padding_15:{
        padding: 15,
    },
    marginTop_8 : {
        marginTop:8
    },
    greenBorder:{ 
        borderColor: 'green', 
        borderWidth: deviceWidth/512, 
        marginTop: 12, 
        marginBottom: 12 
    },
    description:{
        color: '#9BB8AC', 
        fontSize: deviceWidth/38.4
    },
    descriptionContainer:{
        flex: 1, 
        backgroundColor: '#F6F6F6',
        padding: deviceWidth/38.4
    },
    yearContainer:{
        height: deviceHeight/8.42,
        width: deviceHeight/8.42, 
        backgroundColor: '#777F8B', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginRight: 5
    },
    year:{ 
        fontSize: deviceWidth/20.36, 
        color: 'white', 
        fontWeight: '600' 
    },
    mainContentContainer:{
        height: deviceHeight/8.42, 
        flexDirection: 'row' 
    },
    innerContentTextContainer:{ 
        flex: 1, 
        backgroundColor: '#F6F6F6', 
        width: deviceWidth/1.92, 
        padding: deviceWidth/38.4 
    },
    innerContentText:{ 
        fontSize: deviceWidth/38.4 
    },
    innerContentImage:{ 
        height: deviceHeight/8.42, 
        width: deviceHeight/8.42, 
        marginRight: 10 
    }
}

export default Styles