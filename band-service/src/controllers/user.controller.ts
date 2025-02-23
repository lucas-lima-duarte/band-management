import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';

export const create = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Create User error:', error });
    }
};

export const get = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Get User error:', error });
    }
};