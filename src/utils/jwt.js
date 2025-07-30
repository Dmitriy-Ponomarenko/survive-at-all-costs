import { decode } from '@tsndr/cloudflare-worker-jwt';
// import { DecodedToken } from '@/shared/types/jwt';

export const decodeAccessToken = token => {
  const decodedToken = decode(token);
  const userId = decodedToken.payload?.user_id;

  return Number(userId);
};
