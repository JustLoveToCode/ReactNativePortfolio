import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function InstructionText({children, style}){
 return(
    <Text style={[StyleSheet.instructionText, style]}>{children}</Text>
 )
}

export default InstructionText;


const styles=StyleSheet.create({
    instructionText:{
        fontFamily: 'open-sans',
        color: Colors.instruction100, 
        fontSize: 24,
        fontWeight: 'bold',
        opacity: 0.75
     }

})

