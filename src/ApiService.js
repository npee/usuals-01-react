import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8080/v1";

class ApiService {

    fetchUsers() {
        return axios.get(API_BASE_URL + '/all-users');
    }

    fetchUserByIdAndPassword(id, password) {
        return axios.get(API_BASE_URL + '/users?' + 'userId=' + id + '&password=' + password);
    }

    createUser(quiz) {
        return axios.post(API_BASE_URL + '/users', quiz);
    }

    updateUser(quiz) {
        return axios.put(API_BASE_URL + '/users', quiz);
    }

    deleteUser(userNo) {
        return axios.delete(API_BASE_URL + '/users/' + userNo);
    }

}

export default new ApiService();
