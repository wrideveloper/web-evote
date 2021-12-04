import axios from 'axios';
import API_ENDPOINT from '../config/Api-Endpoint';

class APISOURCE {
    static async getListUsers() {
        try {
            const response = await axios.get(API_ENDPOINT.users);
            return response.data;
        } catch(error) {
            console.log('line 10 ~ API SOURCE CONSTANT')
        }
    }

    static async getUserById(id) {
        try {
            const response = await axios.get(API_ENDPOINT.userId(id));
            return response.data.cities;
        } catch(error) {
            console.log('line 19 ~ API SOURCE CONSTANT')
        }
        
    }

    static async postUser(option) {
        const data = option.data
        try {
            const response = await axios.post(API_ENDPOINT.users, {data});
            return response.data;
        } catch(error) {
            console.log('line 30 ~ API SOURCE CONSTANT')
        }
    }

    static async editUser(option, id) {
        const data = option.data
        try {
            const response = await axios.post(API_ENDPOINT.userId(id), {data});
            return response.data;
        } catch(error) {
            console.log('line 40 ~ API SOURCE CONSTANT')
        }
    }

    static async getCalon() {
        try {
            const response = await axios.get(API_ENDPOINT.calon)
            return response.data
        } catch(error) {
            console.log('line 49 ~ API SOURCE CONSTANT', error)
        }
    }

    static async getCountCalonVoteById(id) {
        try {
            const response = await axios.get(API_ENDPOINT.countByCalonVoteId(id))
            return response.data;
        } catch(error) {
            console.log('line 58 ~ API SOURCE CONSTANT ', error)
        }
    }

    static async getAllVote() {
        try {
            const response = await axios.get(API_ENDPOINT.vote)
            return response.data;
    } catch(error) {
            console.log('line 67 ~ API SOURCE CONSTANT ', error)
        }
    }

}

export default APISOURCE;