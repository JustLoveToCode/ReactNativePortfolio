import {TextInput, View, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import {useState} from 'react';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Cardo';
import InstructionText from '../components/ui/InstructionText';


function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber]=useState('');

    function resetInputHandler(){
        setEnteredNumber();
    }

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber>99){
            Alert.alert('Invalid Number', 
            'Number has to be a Number between 1 to 99',
            [{text: 'OKAY', style: 'destructive',
        onPress: resetInputHandler}]);
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>

    <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType="number-pad" 
        autoCapitalize="none"
        autoCorrect ={false} 
        value={enteredNumber} 
        onChangeText={numberInputHandler}
        />

    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>

        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
    </View>
    </Card>
</View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems: 'center'
    },
    inputContainer:{
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
        opacity: 0.85
    },
    numberInput:{
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer:{
        flex: 1
    }
})

