import { Component, Input, OnInit } from '@angular/core';
import { Techs } from '../../myTechs.type';
import { TechService } from '../../services/tech.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  
  @Input() techId: number | null = null;
  public techs: Techs | null = null;
  
  @Input()
  photoCover:string="";
  @Input()
  cardTitle:string="";
  @Input()
  imgLuffy:string="";

  public isModalOpen: boolean = false;

  constructor(private techService: TechService){}

  ngOnInit(): void{
    if (this.techId !== null) {
      this.getTechData(this.techId);
    }
  }

  getTechData(id: number): void {
    this.techs = this.techService.getTechById(id);
  }

  openDetails() {
this.isModalOpen = true;
}

}
