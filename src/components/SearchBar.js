import React from 'react';
import {View, TextInput,Text, StyleSheet} from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Fontisto style={styles.iconStyle} name="search" />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        //backgroundColor: '#F0EEEE',
        marginHorizontal: 15,
        marginVertical: 10,
        height: 40,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'grey',
        flexDirection: "row",
    },
    inputStyle: {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 10,
        color: 'black'
    }
});

export default SearchBar;