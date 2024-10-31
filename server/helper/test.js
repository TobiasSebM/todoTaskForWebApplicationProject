import fs from 'fs';
import path from 'path'
import { pool } from './db.js'
import { hash,compare } from 'bcrypt'

const __dirname = import.meta.dirname

const initializeTestDb = () => {
    const sql = fs.readFileSync(path.resolve(__dirname,"../todo.sql"), "utf8");
    pool.query(sql)
}

const insertTestUser = (email, password) => {
    hash(password,10,(error,hashedPassword) => {
        pool.query('insert into account (email,password) values ($1,$2)',
            [email,hashedPassword])
    })
}

export { initializeTestDb, insertTestUser }