import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri:result.image_url ? result.image_url : null}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    }, 
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 2
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;