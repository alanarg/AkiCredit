import axios from 'axios';
const api = axios.create({ baseURL:`https://cors-anywhere.herokuapp.com/https://aki-credit-test.appspot.com/`});
export default api;
