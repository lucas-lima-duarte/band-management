import { Router, Request, Response } from "express";
import { BandModel } from "../models/band.model";
import { InviteModel } from "../models/invite.model";
import { BandController } from "../controllers/band.controller";

const bandRouter = Router()
const controller = new BandController()

bandRouter.post('/', controller.create)
bandRouter.get('/', controller.get)
bandRouter.post('/:id/invite', controller.invite)

export default bandRouter