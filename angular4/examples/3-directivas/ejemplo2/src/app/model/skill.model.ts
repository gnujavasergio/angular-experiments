export enum TypeSkill {
  BASIC, INTERMEDIATE, ADVANCED, EXPERT
}

export interface ISkill {
    name: string;
    type: TypeSkill;
    experience: number;
}

export class Skill implements ISkill {
    name: string;
    type: TypeSkill;
    experience: number;    

    constructor(name:string, type: TypeSkill, experience: number){
        this.name = name;
        this.type = type;
        this.experience = experience;
    }
}
