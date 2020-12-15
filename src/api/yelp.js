import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer pGnK6OtzSMxuYdL-QC1JKJWQcgZf_0S-v-Vrc300ptzEaSEVSqV3bL-sNJxnb6DaBt1XS7FYMP3HcrB_ASXJ2jIZQ4LbSxImyf2GDrID_1cDkx9c79vJupsl5WTXX3Yx'
    }
});