import { Component, OnInit } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-amazingoffer',
  templateUrl: './amazingoffer.component.html',
  styleUrls: ['./amazingoffer.component.css']
})
export class AmazingofferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  width:number = 0
 flag:boolean = true

  showRight(){
    this.width -= 175
    console.log(this.width)
    if(this.width < 0) {
      this.flag = false
    }else{
      this.flag = true
    }
  }
  showLeft(){
    this.width += 175
    if(this.width < 0) {
      this.flag = false
    }else{
      this.flag = true
    }
  }


}
