import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
  
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result){
        return null;
    }
    let test = result.hours;
    return (
        <View style={{marginTop: 10}}>
            
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            />
                
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 10,
        alignSelf: 'center'
    },
    name: {
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center',
    },
    phone:{
        fontSize: 15,
        textAlign: 'center'
    }
});

export default ResultsShowScreen;