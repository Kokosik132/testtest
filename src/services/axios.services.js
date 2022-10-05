import axios from "axios";


const apiAxios = axios.create({
    baseURL: 'https://testingapi22.herokuapp.com',
});


export default apiAxios
