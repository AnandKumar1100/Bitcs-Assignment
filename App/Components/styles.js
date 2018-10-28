import { StyleSheet, Dimensions, Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const platform = Platform.OS;

const Styles = {
    dateContainer: { flexDirection: 'row', alignItems: 'center', marginTop:deviceWidth/51.43 },
    dateTextContainer: { backgroundColor: '#495A6C', height: !DeviceInfo.isTablet() ? 80 :deviceWidth/7.68, width:!DeviceInfo.isTablet() ? 80: deviceWidth/7.68, justifyContent: 'center', alignItems: 'center' },
    dateText: { color: 'white', fontWeight: 'bold', fontSize: !DeviceInfo.isTablet() ? 22: deviceWidth/25.46 },
    dateDescriptionContainer: { maxWidth: !DeviceInfo.isTablet() ? 160 :deviceWidth/4.39, minWidth: deviceWidth/6.14 ,height:!DeviceInfo.isTablet() ? 80 : deviceWidth/7.68, backgroundColor:'#F2F2F2', padding:deviceWidth/41.14},
    dateDescription: {fontSize: !DeviceInfo.isTablet() ? deviceWidth/35 :deviceWidth/63},
    marginTop51_42: {marginTop:deviceWidth/51.42},
    baseContainer: { flexDirection: 'row', alignItems: 'center' },
    descriptionContainer: {backgroundColor: '#F2F2F2', padding: deviceWidth/41.14, alignSelf: 'flex-start'},
    description: { fontSize: !DeviceInfo.isTablet() ? deviceWidth/35 : deviceWidth/63 }
}

export default Styles