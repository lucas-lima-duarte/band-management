import { IBase } from "./base.types";

export interface IUser extends IBase {
    email: string;
    password: string;
    name: string;
}
