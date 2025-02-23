import express, { Express } from "express"
import cors from 'cors'
import helmet from 'helmet'

const app: Express = express();

app.use(express.json())
app.use(cors())
app.use(helmet())

export default app