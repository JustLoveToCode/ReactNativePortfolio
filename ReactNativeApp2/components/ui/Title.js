import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function Title({children}){
    return(<Text style={styles.title}>{children}</Text>)
}
export default Title;




const styles=StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.titleColor100,
        textAlign: 'center',
        marginTop: 50,
        borderWidth: 3,
        borderColor:Colors.titleColor100,
        padding: 12
     }
})
