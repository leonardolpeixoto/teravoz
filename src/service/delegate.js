import axios from '../infra/axios';

export default async (callId, destination) => {
  const request = await axios();
  
  const response = await request
    .post('/', {
      type: 'delegate',
      call_id: callId, 
      destination,
    });
    
  return response;
}