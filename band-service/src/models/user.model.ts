import { getModelForClass, prop } from "@typegoose/typegoose";

enum Instruments {
    GUITAR = "guitar",
    DRUMS = "drums",
    BASS = "bass",
    VOCALS = "vocals"
}

export class User {
    @prop({ required: true })
    name!: string;

    @prop({ required: true, unique: true })
    email!: string

    @prop({ required: true })
    password!: string

    @prop({ type: () => [String], enum: Instruments })
    instruments?: Instruments[];

    @prop({})
    experience?: {
        years: number;
        level: 'beginner' | 'medium' | 'advanced';
    };

    @prop({})
    influences?: string[];

    @prop({})
    extraSkills?: string[];

    @prop({})
    occupation?: string;

}

export const UserModel = getModelForClass(User)