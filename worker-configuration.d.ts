interface Env {
  DB: D1Database;
  JWT_SECRET_TOKEN: string;
  ACCESS_TOKEN_EXPIRES_IN: number;
  REFRESH_TOKEN_EXPIRES_IN: number;
  ASSETS: Fetcher;
}
