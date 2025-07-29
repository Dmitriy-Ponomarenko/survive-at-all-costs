export function isTokenExpired(accessToken) {
  try {
    const tokenData = JSON.parse(atob(accessToken.split('.')[1]));
    const expirationTime = tokenData.exp * 1000;

    return Date.now() >= expirationTime;
  } catch {
    return true;
  }
}
