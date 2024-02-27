import { View, StyleSheet, Alert, Text, FlatList} from 'react-native';
import Title from '../components/ui/Title';
import {useState, useEffect} from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton'
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Cardo';
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';
import CustomModal from '../components/ui/Modal';

function generateRandomBetween(min,max,exclude){
   const rndNum =Math.floor(Math.random()*(max-min)) + min;

   if (rndNum === exclude){
      return generateRandomBetween(min,max,exclude)
   } else{
      return rndNum;
   }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
const initialGuess = generateRandomBetween(
   1, 
   100, 
   userNumber
   );

const [currentGuess, setCurrentGuess] = useState(initialGuess);
const [guessRounds, setGuessRounds] = useState([initialGuess]);
const [modalVisible, setModalVisible]= useState(false);

useEffect(()=>{
   if(currentGuess===userNumber){
   onGameOver(guessRounds.length);
   }
}, [currentGuess, userNumber, onGameOver]);

useEffect(()=>{
   minBoundary=1;
   maxBoundary=100;
},[]);

function nextGuessHandler(direction){
   if(
      (direction ==='lower' && currentGuess < userNumber) || 
      (direction ==='greater' && currentGuess > userNumber)
      ){
      setModalVisible(true);
      return;
   }

   if(direction === 'lower'){
      maxBoundary = currentGuess;
   } else{
      minBoundary = currentGuess + 1;
   }
   const newRndNumber = generateRandomBetween(
      minBoundary, 
      maxBoundary, 
      currentGuess
      );
      
   setCurrentGuess(newRndNumber);
   setGuessRounds(prevGuessRounds=>[...prevGuessRounds, newRndNumber]);
}
const guessRoundsListLength = guessRounds.length;

 return (
   <View style={styles.screen}>
      <Title>Opponent Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
         <InstructionText style={
            styles.instructionText
         }>Higher or Lower?</InstructionText>
         <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)}/>

         <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="md-remove" size={24} color="white"/>
            </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name="md-add" size={24} color="white"/>
            </PrimaryButton>
            </View>
         </View>
      </Card>

      <View style={styles.listContainer}>
         {/* {guessRounds.map(guessRound=> <Text key={guessRound}>{guessRound}</Text>)} */}
         <FlatList 
         data={guessRounds} 
         renderItem={(itemData)=> (
         <GuessLogItem 
         roundNumber={guessRoundsListLength - itemData.index} 
         guess={itemData.item}
         />
         )}
         keyExtractor={(item)=>item}
         />

      </View>
    </View>
 )
}

export default GameScreen;



const styles=StyleSheet.create({
   screen:{
      flex: 1,
      padding: 12
   },
   buttonsContainer:{
      flexDirection: 'row'
   },
   buttonContainer:{
      flex: 1,
   },
   instructionText:{
      marginBottom: 12
   },
   listContainer:{
      flex: 1,
      padding: 16,

   }

})