import { Component } from '@angular/core';
import { IEmployee, Employee } from './model/employee.model';
import { IRole, Role } from './model/role.model';
import { Skill, TypeSkill, ISkill } from './model/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Directiva ngIf then else';
  employee: IEmployee;
  role: IRole;  
  skill: ISkill;

  constructor(){
    this.role = new Role("Admin", true);
    this.skill = new Skill("Java", TypeSkill.ADVANCED, 8);
    let skillTypeScript: ISkill = new Skill("TypeScript", TypeSkill.ADVANCED, 2);

    this.employee = new Employee(1, "Sergio Antonio", "Ochoa Martinez", "Ing. de Sistemas", 1000);
    this.employee.skills[0] = this.skill;
    this.employee.skills[1] = skillTypeScript;
  }

}

