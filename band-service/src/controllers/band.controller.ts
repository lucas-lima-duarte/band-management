import { Request, Response } from "express"
import { BandModel } from "../models/band.model"

export class BandController {

    static create = async (req: Request, res: Response) => {
        try {
            const band = await BandModel.create(req.body)
            res.status(201).json(band)
            return

        } catch (error) {
            res.status(500).json({ error })
            return
        }
    }

    static get = async (req: Request, res: Response) => {
        const bands = await BandModel.find()
        res.status(200).json({bands})
    }
}
