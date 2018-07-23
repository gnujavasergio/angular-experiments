import { Injectable } from '@angular/core';
import { ICourse } from '../model/icourse'

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private courses: any;
  private details: any;

  constructor() {
    this.courses = {};
    this.details = { total: 0, items: 0 }
  }

  getCourses() {
    return this.courses;
  }

  getDetails() {
    return this.details;
  }

  addToCart(course: ICourse) {
    if (!this.courses[course.id]) {
      this.courses[course.id] = {
        quantty: 1,
        name: course.name,
        price: course.price
      }
    } else {
      this.courses[course.id].quantity += 1;
    }

    this.details.total += course.price;
    this.details.items += 1;
  }
}