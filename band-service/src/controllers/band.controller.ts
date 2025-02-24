import { Request, Response } from "express"
import { BandModel } from "../models/band.model"
import { InviteModel } from "../models/invite.model"

export class BandController {

    create = async (req: Request, res: Response) => {
        try {
            const band = await BandModel.create(req.body)
            res.status(201).json(band)
            return

        } catch (error) {
            res.status(500).json({ error })
            return
        }
    }

    get = async (req: Request, res: Response) => {
        const bands = await BandModel.find()
        res.status(200).json({ bands })
    }

    invite = async (req: Request, res: Response) => {
        const bandId = req.params.id
        const { user } = req.body

        if (!user) {
            res.status(400).json({ message: 'User must be informed' })
        }

        const invite = await InviteModel.create({ bandId, ...req.body })
        res.status(201).json(invite)

    }
}
