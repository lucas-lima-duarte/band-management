import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "./user.model";
import { Band } from "./band.model";

export enum Status {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected'
}

export class Invite {
    @prop({})
    userId!: Ref<User>

    @prop({})
    bandId!: Ref<Band>

    @prop({ enum: Status, default: Status.PENDING })
    status!: Status
}

export const InviteModel = getModelForClass(Invite)