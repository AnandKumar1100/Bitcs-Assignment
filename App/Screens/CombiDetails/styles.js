import { StyleSheet, Dimensions, Platform } from 'react-native'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const platform = Platform.OS;

const Styles = {
    container:{
        flexGrow: 1,
    },
    header:{
        backgroundColor: '#0D5C26', height: deviceHeight / 18
    },
    sliderContainer:{ 
        flex: 0.15, marginBottom: deviceWidth / 20.57, flexDirection:'row' 
    },
    sliderValueContainer:{flex:0.55, alignItems:'center', justifyContent:'space-between'},
    sliderValue:{fontSize: deviceWidth/35, color:'green', fontWeight:'bold'},
    sliderLineContainer : {flex:0.45, alignItems:'center', paddingVertical:15, alignItems:'center'},
    sliderLine : {borderWidth:1, flex:1, borderColor:'green'},
    sliderCircle: {height: deviceWidth/25.71, width: deviceWidth/25.71, borderRadius:deviceWidth/51.43, backgroundColor:'green', position:'absolute', marginTop:40},
    flex_85: { flex: 0.85 },
    flexDirection_row: {flexDirection: 'row'},
    green_border: {flex:0.01, backgroundColor:'#0D5C26'},
    flex_1: {flex:1},
    height20_57: {height: deviceWidth / 20.57},
    leftView_tablet: { flex: 0.50, alignItems: 'flex-end' },
    rightView_tablet: { flex: 0.495, marginTop: deviceHeight / 5 },
    tablet_border: { flex: 0.005, backgroundColor: '#0D5C26' }
}

export default Styles