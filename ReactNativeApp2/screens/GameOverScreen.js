import {Image, View, StyleSheet, Text} from 'react-native';
import Colors from '../constants/colors.js';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title'

function GameOverScreen({roundsNumber,userNumber, onStartNewGame}){
    return(
    <View style={styles.rootContainer}>
        <Title>Game Over!!</Title>
        <View style={styles.imageContainer}>
        <Image 
        style={styles.image}
        source={require('../assets/success.png')}/>
        </View>
        <Text style={styles.summaryText}>
            <Text>Your Phone needed 
            <Text style={styles.highlight}> {roundsNumber} </Text>
            Rounds to guess the number 
            <Text style={styles.highlight}> {userNumber}</Text>
            </Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    )
}

export default GameOverScreen;

const styles =StyleSheet.create({
    rootContainer:{
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    },
    imageContainer:{
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText:
    {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight:{
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
});

