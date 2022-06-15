import {View, Text, Pressable, Image} from 'react-native'

import styles from './styles';

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../../assets/hw3_logo.jpg')}
            />
        <View style={styles.logo2}>
            <Pressable onPress={() => navigation.navigate('Message')}>
                <Image
                    style={styles.logo2}
                    source={require('../../assets/info_icon_logo_3.png')}
                />
            </Pressable>
        </View>
        </View>
    );
}