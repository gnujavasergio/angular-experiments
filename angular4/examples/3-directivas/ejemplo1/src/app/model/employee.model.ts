import { ISkill } from "./skill.model";

export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    profession: string;
    salary: number;
    skills: ISkill[];
  }
  
export class Employee implements IEmployee{
    id: number;  
    firstName: string;
    lastName: string;
    profession: string;
    salary: number;
    skills: ISkill[];

    constructor(id: number, firstName: string, lastName: string, profession: string, salary: number, skills: ISkill[] = []){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.salary = salary;
        this.skills = skills;
    }
}
  