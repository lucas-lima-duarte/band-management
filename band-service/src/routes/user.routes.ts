import { Router, Request, Response } from "express";
import { UserModel } from "../models/user.model";

const UserRouter = Router()

UserRouter.post('/', async (req: Request, res: Response) => {
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
})

UserRouter.get('/', async (req: Request, res: Response) => {
    const users = await UserModel.find()
    res.status(201).json(users)
})

export default UserRouter