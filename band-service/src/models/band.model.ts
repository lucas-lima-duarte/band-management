import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./user.model";

export class Band {
    @prop({ required: true })
    public name!: string;

    @prop({ required: true, ref: User })
    public leader!: Ref<User>;

    @prop({ default: [] })
    public members!: Ref<User>[];

    @prop({ default: 0 })
    public showsPlayed!: number;

    @prop({ default: 0 })
    public songsRecorded!: number;
}

export const BandModel = getModelForClass(Band)
