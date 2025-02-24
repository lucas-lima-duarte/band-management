import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import bcrypt from 'bcrypt'

export class UserController {
    static create = async (req: Request, res: Response) => {
        const { email, password, name } = req.body

        if (!email || !password ) {
            res.status(400).json({message: `'email' and 'password' required`})
            return
        }

        if (!name) {
            res.status(400).json({message: `'name' required`})
            return
        }

        try {
            const existingUser = await UserModel.findOne({ email })
            if (existingUser) {
                res.status(400).json({ message: "Email already in use" })
                return
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            req.body.password = hashedPassword
            const user = await UserModel.create(req.body)
            res.status(201).json(user)
        } catch (error) {
            res.status(500).json({ error: `${error}` })
        }
    }

    static get = async (req: Request, res: Response) => {
        try {
            const user = await UserModel.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Get User error:', error })
        }
    };
}
