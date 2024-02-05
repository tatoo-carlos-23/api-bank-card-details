import mysql, { ConnectionOptions } from "mysql2";

const config: ConnectionOptions = {
    user: 'root',
    database: 'bd_bank_card_details',
    password: 'root',
    port: 3306
};

export const CONN = mysql.createConnection(config);