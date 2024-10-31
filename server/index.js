import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import todoRouter from './routes/todoRouter.js'
import userRouter from './routes/userRouter.js'

dotenv.config()

const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/',todoRouter)
app.use('/user',userRouter)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({error: err.message})
})

app.listen(port)

// moved to db.js
//
// import { pool } from './helper/db.js'
// import pkg from 'pg' 
// const environment = process.env.NODE_ENV 
// const { Pool } = pkg 

// moved to db.js
//
// app.get('/',(req,res) => {
//     pool.query('select * from task',(error, result)=> {
//         if (error) {
//             return res.status(500).json({error: error.message})
//         }
//         return res.status(200).json(result.rows)
//     })
// })

// moved to db.js
//
// app.post('/create',(req,res) => {
//     pool.query('insert into task (description) values ($1) returning *',
//         [req.body.description],
//         (error,result) => {
//             if (error) {
//                 return res.status(500).json({error: error.message})
//             }
//             return res.status(200).json({id: result.rows[0].id})
//         }
//     )
// })

// moved to db.js
//
// app.delete('/delete/:id',(req,res) => {
//     const id = parseInt(req.params.id)
//     pool.query('delete from task where id = $1',
//         [id],
//         (error,result) => {
//             if (error) {
//                 return res.status(500).json({error: error.message})
//             }
//             return res.status(200).json({id: id})
//         }
//     )
// })

// moved to db.js
//
// const openDb = () => {
//     const pool = new Pool ({
//         user: process.env.DB_USER,
//         host: process.env.DB_HOST,
//         database: process.env.NODE_ENV === 'development' ? process.env.DB_NAME : process.env.TEST_DB_NAME,
//         password: process.env.DB_PORT,
//         port: process.env.DB_PORT
//     })
//     return pool
// }

