async function pbkdf2(
  password,
  iin,
  iterations = 100000,
  keyLength = 32,
  hashAlgorithm = 'SHA-256'
) {
  const passwordBuffer = new TextEncoder().encode(password);
  const saltBuffer = new TextEncoder().encode(iin);

  const algorithm = {
    name: 'PBKDF2',
    hash: hashAlgorithm,
  };

  const key = await crypto.subtle.importKey(
    'raw',
    passwordBuffer,
    algorithm,
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    { ...algorithm, salt: saltBuffer, iterations: iterations },
    key,
    keyLength * 8
  );

  return [...new Uint8Array(derivedBits)]
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function hashLogin(login) {
  let hashBuffer = new TextEncoder().encode(login);

  for (let i = 0; i < 11; i++) {
    hashBuffer = await crypto.subtle.digest('SHA-256', hashBuffer);
  }

  // Convert ArrayBuffer to Uint8Array
  const hashArray = new Uint8Array(hashBuffer);

  // Convert to hex-string
  return Array.from(hashArray)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

export const hashPassword = async (password, login) => {
  const hashedLogin = await hashLogin(login);
  return await pbkdf2(password, hashedLogin);
};
