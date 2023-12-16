// parametrage/gestion du caller=axios
import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhoast:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default Axios