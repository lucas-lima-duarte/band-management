import { Router, Request, Response } from "express";
import { BandModel } from "../models/band.model";
import { InviteModel } from "../models/invite.model";
import { InviteStatus } from "../types/invite-status.type";

const InviteRouter = Router()

InviteRouter.post('/:id/accept', async (req: Request, res: Response) => {
    const inviteId = req.params.id
    const invite = await InviteModel.findById(inviteId)
    const band = await BandModel.findById(invite?.bandId)

    if (!band || !invite) {
        res.status(500).json({})
        return
    }

    band?.members.push(invite.userId)
    await band.save()
    await InviteModel.findOneAndUpdate({ _id: inviteId }, { status: InviteStatus.ACCEPTED }, { new: true })
    res.status(201).json(band)
})

export default InviteRouter
