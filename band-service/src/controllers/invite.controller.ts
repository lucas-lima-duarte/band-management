import { Request, Response } from "express"
import { InviteModel } from "../models/invite.model"
import { BandModel } from "../models/band.model"
import { InviteStatus } from "../types/invite-status.type"

export class InviteController {
    accept = async (req: Request, res: Response) => {
        const inviteId = req.params.id
        const invite = await InviteModel.findById(inviteId)
        const band = await BandModel.findById(invite?.bandId)

        if (!band || !invite) {
            res.status(500).json({})
            return
        }

        // TODO: - Check if member is already included
        //       - Check null

        band?.members.push(invite.user)
        await band.save()
        await InviteModel.findOneAndUpdate({ _id: inviteId }, { status: InviteStatus.ACCEPTED }, { new: true })
        res.status(201).json(band)
    }
}