import express, { Express } from "express"
import cors from 'cors'
import helmet from 'helmet'

import UserRouter from "./routes/user.routes";
import bandRouter from "./routes/band.routes";
import InviteRouter from "./routes/invite.routes";

const app: Express = express();

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/api/user', UserRouter)
app.use('/api/bands', bandRouter)
app.use('/api/invites', InviteRouter)


export default app
