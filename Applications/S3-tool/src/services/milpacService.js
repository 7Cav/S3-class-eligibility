import axios from 'axios';

export default class EligibilityService {
    
    constructor(){

    }

    getMilpac(user)
    {
        return new Promise((resolve, reject) => {
            axios.get('/user/' + user.user_id + '/records')
            .then(function (response) {
              resolve(response.data);
            })
            .catch(function (error) {
              console.log(error);
              reject(error);
            })
        })
    }
}