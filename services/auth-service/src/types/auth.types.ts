import { Request } from "express";
import { IUser } from "./user.types";

export interface IAuthRequest extends Request {
    user?: IUser
}

export interface IJWTPayload {
    userId: string;
    email: string;
    bandId?: string;
}

export interface ILoginResponse {
    token: string;
    user: Omit<IUser, 'password'>
}