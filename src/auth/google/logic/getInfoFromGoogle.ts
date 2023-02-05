import axios from 'axios';

/**
 * @description Function to decode Google OAuth token
 * @param token: string
 * @returns ticket object
 */
export const getInfoFromGoogle = async (token: string) => {
  console.log({ token });

  const response = await axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
  );

  console.log({ data: response?.data });

  return response?.data;
};
