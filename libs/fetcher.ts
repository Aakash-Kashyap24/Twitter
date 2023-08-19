import axios from 'axios'


const fetcher = async (url:string) => {
    try {
      console.log('url', url);

      const response = await axios.get(url);
      console.log('data', response?.data, url);
      return response?.data;
    } catch (error) {
      console.error('fetcher error', error);
      throw error;
    }
  };
  

export default fetcher;