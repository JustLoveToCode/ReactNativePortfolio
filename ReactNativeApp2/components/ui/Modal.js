import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import PrimaryButton from './PrimaryButton';

const CustomModal=({visible,onClose})=>{
    return(
    <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text>Don't Lie, you know this is wrong</Text>
                <PrimaryButton onPress={onClose}>My Bad</PrimaryButton>
            </View>
        </View>
    </Modal>
    );
};

const styles=StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText:{
        fontSize: 16,
        marginBottom: 20,
    }
})

export default CustomModal;