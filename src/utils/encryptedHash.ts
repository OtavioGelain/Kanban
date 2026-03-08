import bcrypt from 'bcrypt';

export async function encryptedHash(password: string): Promise<string> {
  //numero de vezes que o bcrypt irá processar a senha
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}