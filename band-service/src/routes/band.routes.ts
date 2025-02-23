import { Router, Request, Response } from "express";
import { BandModel } from "../models/band.model";

const BandRouter = Router()

BandRouter.post('/', async (req: Request, res: Response) => {
    const user = await BandModel.create(req.body)
    res.status(201).json(user)
})

BandRouter.get('/', async (req: Request, res: Response) => {
    const users = await BandModel.find()
    res.status(201).json(users)
})

BandRouter.post('/:id/invite', async (req: Request, res: Response) => {
    const bandId = req.params.id
    const { user } = req.body
    
})

export default BandRouter