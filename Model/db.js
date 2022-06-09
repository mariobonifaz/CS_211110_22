import Sequelize from 'sequelize';
import { db } from '../config.js';
import pkg from 'pg';
const { Pool } = pkg;


async function getConnection() {
    const client = new Pool({
        user: config.db.user,
        host: config.db.host,
        database: config.db.database,
        password: config.db.password,
        port: config.db.port,
    });
    await client.connect();
    return client;
}



const sequelizeClient = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'postgres',
});

sequelizeClient.authenticate()
    .then(() => {
        console.log('conectado')
    })
    .catch(() => {
        console.log('no se conecto')
    });

export const getData = { getConnection, sequelizeClient };    