import bcrypt from 'bcrypt';

export async function encryptedHash(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}