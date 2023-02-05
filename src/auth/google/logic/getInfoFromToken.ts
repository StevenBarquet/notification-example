import decode from 'jwt-decode';

/**
 * @description Function to decode Google OAuth token
 * @param token: string
 * @returns ticket object
 */
export const getInfoFromToken = async (token: string) => {
  const decoded = await decode(token);

  console.log({ decoded });

  return decoded;
};
