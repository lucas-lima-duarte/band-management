import express, { Express } from "express"
import cors from 'cors'
import helmet from 'helmet'

import UserRouter from "./routes/user.routes";
import BandRouter from "./routes/band.routes";
import InviteRouter from "./routes/invite.routes";

const app: Express = express();

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/api/login', UserRouter)
app.use('/api/bands', BandRouter)
app.use('/api/invites', InviteRouter)


app.use

export default app
