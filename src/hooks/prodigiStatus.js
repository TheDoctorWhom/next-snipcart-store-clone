import {useState, useEffect} from 'react';
import youtube from '../apis/prodigi';

const useVideos = (defaultSearchTerm) => {
  const [status, setStatus] = useState([]);

  useEffect (() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

const search = async () => {
  const response = await youtube.get('/Orders',{


    });// end of response
      // const reducedResponse = {};

    // console.log(response);
    setStatus(response.status);

  }; // end of search

  return [status];
};

export default useVideos;
