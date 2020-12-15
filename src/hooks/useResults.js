import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'helsinki',
                    radius: 10000
                }
            });
            setResults(response.data.businesses);
        } catch(err){
            setErrorMessage("Something went wrong!");
        }
    };

    //Call searchAPI one time when component
    //is first rendered.
    useEffect(() => {
        searchApi('pizza');
    }, []);

    return [searchApi, results, errorMessage];
};