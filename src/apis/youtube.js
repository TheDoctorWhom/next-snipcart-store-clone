import axios from 'axios';

// const KEY = '43b43e5c0amshceb6bafc94718bcp1af3ddjsn4b3909b0eedd';

export default axios.create({
  baseURL: '../boardgame_catalog.json',
  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }

});
