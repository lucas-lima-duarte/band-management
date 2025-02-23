import express, { Express } from "express"
import cors from 'cors'
import helmet from 'helmet'

import UserRouter from "./routes/user.routes";
import BandRouter from "./routes/band.routes";

const app: Express = express();

app.use('/api/users', UserRouter)
app.use('/api/bands', BandRouter)

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use

export default app