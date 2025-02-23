import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./user.model";

class Band {
    @prop({ required: true })
    public name!: string;

    @prop({ required: true })
    public leader!: Ref<User>;

    @prop({ default: [] })
    public members!: Ref<User>[];

    @prop({ default: 0 })
    public showsPlayed!: number;

    @prop({ default: 0 })
    public songsRecorded!: number;
}

export const BandModel = getModelForClass(Band)
