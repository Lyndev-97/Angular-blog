import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{
  @Input()
  photoCover:string ="https://media.licdn.com/dms/image/v2/D4D03AQFTcOFDyh1aXw/profile-displayphoto-crop_800_800/B4DZk2apbCJMAI-/0/1757554581980?e=1761782400&v=beta&t=lVZFk__QBJct3B8GyVuktEzCZbAsKPm8CmT-7wWWYOA";
  @Input()
  cardTitle:string="";
  @Input()
  cardDescription:string = "";

  constructor(){}

  ngOnInit(): void{

  }

}
