import { app } from './app';
import 'reflect-metadata'
import { AppDataSource } from './database/data-source';
import { env } from './env/envSchema';

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.log('Error during Data Source initialization:', err);
  });
app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});