import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors.js'



function Card({children}){
 return(
<View style={styles.card}>
{children}
</View>
 )
}

export default Card;

const styles= StyleSheet.create({
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: Colors.shadowColor100,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        opacity: 0.6



    }
})