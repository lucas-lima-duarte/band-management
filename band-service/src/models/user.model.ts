import { getModelForClass, prop } from "@typegoose/typegoose";

enum Instruments {
    GUITAR = "guitar",
    DRUMS = "drums",
    BASS = "bass",
    VOCALS = "vocals"
}

export class User {

    @prop({ required: true })
    public name!: string;

    @prop({ required: true })
    public instruments!: Instruments[];

    @prop({ required: true })
    public experience!: {
        years: number;
        level: 'iniciante' | 'intermediario' | 'avancado';
    };

    @prop({ required: true })
    public influences?: string[];

    @prop({ required: true })
    public extraSkills?: string[];

    @prop({ required: true })
    public occupation?: string;

}

export const UserModel = getModelForClass(User)