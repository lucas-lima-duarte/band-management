import { BaseModel } from "./base.model";
import { getModelForClass, prop } from "@typegoose/typegoose";

export class User extends BaseModel {
    @prop({ required: true })
    email!: string;

    @prop({ required: true })
    password!: string;

    @prop({ required: true })
    name!: string;

}

export const UserModel = getModelForClass(User)
