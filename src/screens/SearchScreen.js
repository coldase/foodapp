import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === '$', '$$' or '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };
    
    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.errormsg}>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('€')} title="Low price"/>
                <ResultsList results={filterResultsByPrice('€€')} title="Medium price"/>
                <ResultsList results={filterResultsByPrice('€€€')} title="High price"/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    errormsg: {
        textAlign: 'center'
    }
});

export default SearchScreen;