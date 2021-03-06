import { Class } from './Class';

export interface Activity {
    id?: number,
    name: string,
    difficulty: Difficulty,
    doneStatus: DoneStatus,
    conclusionStatus: boolean,
    expirationDate: Date,
    conclusionDate: Date,
    idClass: number,
    classOfActivity?: Class
}

export enum Difficulty {
    easy = 0,
    medium,
    hard
}

export enum DoneStatus {
    todo = 0,
    doing,
    done
}