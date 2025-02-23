import { IBase } from "./base.types";

export type UserRole = "band-leader" | "band-member"

export interface IUser extends IBase {
    email: string;
    password: string;
    name: string;
    role: UserRole;
    bandId?: string;
}
