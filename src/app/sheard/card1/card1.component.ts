import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() cardImg = '../../../assets/img/چشم آبی.jpg'
  @Input() cardPrice:string = ''
  @Input() discount:string = '1'
  @Input() discounted:string = '100'
  @Input() class:string = 'rounded-pill bg-danger'


}
