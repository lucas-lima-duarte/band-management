import { getModelForClass, prop } from "@typegoose/typegoose";
import { BaseModel } from "./base.model";

export class Band extends BaseModel {

    @prop({required: true})
    name!: string

    @prop({})
    description?: string

}

export const BandModel = getModelForClass(Band)
