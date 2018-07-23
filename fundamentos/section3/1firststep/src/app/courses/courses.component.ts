import { Component, OnInit } from '@angular/core';

export interface ICourse {
  id:number;
  name:string;
  image:string;
  price:number;
}

const COURSES: ICourse[] = [
  {
    id:1,
    name:'Angular 2',
    image: 'https://s.yimg.com/fz/api/res/1.2/qst9IfHxUXYsRpI_Smw_aQ--~C/YXBwaWQ9c3JjaGRkO2g9MTIwMDtxPTgwO3c9MTIwMA--/https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/18/0505700a1611e7996331f6029a1fe7/angular.png.cf.jpg',
    price: 30
  },
  {
    id:2,
    name:'Python',
    image: 'https://s.yimg.com/fz/api/res/1.2/qst9IfHxUXYsRpI_Smw_aQ--~C/YXBwaWQ9c3JjaGRkO2g9MTIwMDtxPTgwO3c9MTIwMA--/https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/18/0505700a1611e7996331f6029a1fe7/angular.png.cf.jpg',
    price: 120
  }
]

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  title:string = 'Cursos disponibles'

  courses: ICourse[] = COURSES

  constructor() { }

  ngOnInit() {
  }

}
