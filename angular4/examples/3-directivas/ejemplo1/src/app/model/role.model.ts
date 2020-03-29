export interface IRole {
    name: string;
    status: boolean;
}

export class Role implements IRole {
    name: string;    
    status: boolean;
    
    constructor(name: string, status:boolean){
        this.name = name;
        this.status = status;
    }
}