import { Component, OnInit, Input} from '@angular/core';
import { ICourse } from '../model/icourse'
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-course-box',
  templateUrl: './course-box.component.html',
  styleUrls: ['./course-box.component.css']  
})

export class CourseBoxComponent implements OnInit {

  @Input()
  course: ICourse;

  constructor(private cartService: CartService) { 

  }

  ngOnInit() {
  }

  add(course: ICourse){
    this.cartService.addToCart(course)
  }

}
