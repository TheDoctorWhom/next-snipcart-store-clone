import axios from 'axios';

const KEY = process.env.NEXT_PUBLIC_PRODIGI_API_KEY;


export default axios.create({
  baseURL: 'https://api.sandbox.prodigi.com/v4.0/',
  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-API-Key': KEY,
   }
});
