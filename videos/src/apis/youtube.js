import axios from 'axios';

const KEY = 'AIzaSyBm69MDaGRJmCGOscUJH20zTl8YuTfHbu0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});