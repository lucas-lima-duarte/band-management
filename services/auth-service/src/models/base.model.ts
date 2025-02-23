import { prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

export class BaseModel {
    @prop({ required: true })
    id!: Types.ObjectId

    @prop({})
    updatedAt?: Date

    @prop({ default: Date.now() })
    createdAt!: Date
}