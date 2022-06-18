import { DataSource } from 'typeorm';

const devDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['/src/**/*.entity.ts'],
  // migrationsTableName: 'migrations',
  migrations: ['/src/migrations/*.ts'],
  // entities: ['dist/**/*.entity.js'],
  // migrations: ['dist/src/migrations/*.js'],
});

export default devDataSource;
