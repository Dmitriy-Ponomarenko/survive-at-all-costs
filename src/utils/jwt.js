// src/utils/jwt.js

import { decode } from '@tsndr/cloudflare-worker-jwt';

export const decodeAccessToken = token => {
  const decodedToken = decode(token);
  const userId = decodedToken.payload?.user_id;

  return Number(userId);
};
