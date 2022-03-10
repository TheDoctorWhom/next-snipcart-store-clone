import {useState, useEffect} from 'react';
import youtube from '../apis/prodigi';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect (() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

const search = async () => {
  const response = await youtube.get('/Orders',{


    });// end of response
      // const reducedResponse = {};

    console.log(response);
    setVideos(response);

  }; // end of search

  return [videos, search];
};

export default useVideos;
