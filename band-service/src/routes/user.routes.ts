import { Router, Request, Response } from "express";
import { UserModel } from "../models/user.model";

const UserRouter = Router()

UserRouter.post('/', async (req: Request, res: Response) => {
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
})

UserRouter.get('/:id', async (req: Request, res: Response) => {
    const user = await UserModel.findOne({ _id: req.params.id })
    res.status(201).json(user)
})

export default UserRouter