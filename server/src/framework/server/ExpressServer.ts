import express from 'express'
import { json } from 'body-parser'
import { userRoutes } from '../routes/UserRoutes'
import dotenv from 'dotenv';

dotenv.config();

const app = express()
app.use(json())

console.log(process.env.MONGO_URI)

app.use('/api', userRoutes)

app.listen(3000, () => {
  console.log('server is running on port 3000')
})
