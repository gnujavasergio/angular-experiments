import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {ICourse} from '../model/icourse'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: Http) { }
}
