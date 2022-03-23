/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import axios from 'axios';

export const verifyEmail = async (otp, userId) => {
  try {
    const {data} = await axios.post('/verify-email', {otp, userId});
    console.log('otp:',otp);
    console.log({data});
    return data;
  } catch (error) {
    return catchError(error);
  }
};
