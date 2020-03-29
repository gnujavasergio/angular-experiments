import { Component } from '@angular/core';
import { IEmployee, Employee } from './model/employee.model';
import { IRole, Role } from './model/role.model';
import { ISkill, Skill, TypeSkill } from './model/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Directiva ngIf then else';
  employee: IEmployee;
  roleAdmin: IRole;
  roleUser: IRole;

  constructor() {
    this.roleAdmin = new Role("admin", true);
    this.roleUser = new Role("user", true);

    let skillJava = new Skill("Java", TypeSkill.EXPERT, 10);
    let skillPhp = new Skill("PHP", TypeSkill.EXPERT, 8);
    let skillKotlin = new Skill("Kotlin", TypeSkill.ADVANCED, 2);
    let skillJavaScript = new Skill("JavaScript", TypeSkill.ADVANCED, 4);
    let skillTypeScript: ISkill = new Skill("TypeScript", TypeSkill.ADVANCED, 2);
    let skillAndroid: ISkill = new Skill("Android", TypeSkill.EXPERT, 6);

    this.employee = new Employee(1, "Sergio Antonio", "Ochoa Martinez", "Ing. de Sistemas", 1000);
    this.employee.skills[0] = skillJava;
    this.employee.skills[1] = skillJavaScript;
    this.employee.skills[2] = skillPhp;
    this.employee.skills[3] = skillKotlin;
    this.employee.skills[4] = skillTypeScript;
    this.employee.skills[5] = skillAndroid;
  }

}
