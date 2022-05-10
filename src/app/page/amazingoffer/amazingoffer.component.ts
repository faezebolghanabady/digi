import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazingoffer',
  templateUrl: './amazingoffer.component.html',
  styleUrls: ['./amazingoffer.component.css']
})
export class AmazingofferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 2; index++) {
      setTimeout(() => {
        this.width -= 175
      }, 1000);
      
    }
    
  }
  width:number = 0

  show(){
    this.width -= 175
    console.log(this.width)

  }

}
