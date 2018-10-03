import axios from 'axios';

export default (callId, destination) => {
  axios
    .post('/', {
      type: 'delegate',
      call_id: callId, 
      destination,
    });
}