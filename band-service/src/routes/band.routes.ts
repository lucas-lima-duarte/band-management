import { Router, Request, Response } from "express";
import { BandModel } from "../models/band.model";
import { InviteModel } from "../models/invite.model";
import { BandController } from "../controllers/band.controller";

const BandRouter = Router()

BandRouter.post('/', BandController.create)

BandRouter.get('/', BandController.get)

BandRouter.post('/:id/invite', async (req: Request, res: Response) => {
    const bandId = req.params.id
    const { user } = req.body

    const invite = InviteModel.create({ bandId, user })
    res.status(201).json(invite)

})

export default BandRouter