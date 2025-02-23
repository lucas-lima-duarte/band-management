import { IBase } from "./base.types";

export interface IBand extends IBase {
    name: string;
    genre?: string[];
    location?: string;
    foundedAt?: Date
    leaderId: string;
    members?: string[]
}