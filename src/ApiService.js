import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8080/v1";

class ApiService {

    fetchUsers() {
        return axios.get(API_BASE_URL + '/all-users');
    }

}

export default new ApiService();
