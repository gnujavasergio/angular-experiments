import { Component, OnInit, Input} from '@angular/core';
import { ICourse } from '../model/icourse'

@Component({
  selector: 'app-course-box',
  templateUrl: './course-box.component.html',
  styleUrls: ['./course-box.component.css']
})

export class CourseBoxComponent implements OnInit {

  @Input()
  course: ICourse;

  constructor() { }

  ngOnInit() {
  }

}
