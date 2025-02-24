import { Router, Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { UserController } from "../controllers/user.controller";

const UserRouter = Router()

UserRouter.post('/register', UserController.create)

UserRouter.get('/:id', async (req: Request, res: Response) => {
    const user = await UserModel.findOne({ _id: req.params.id })
    res.status(200).json(user)
})

export default UserRouter