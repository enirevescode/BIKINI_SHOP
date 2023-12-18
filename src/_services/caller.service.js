// parametrage/gestion du caller=axios
import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhoast:27017',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default Axios