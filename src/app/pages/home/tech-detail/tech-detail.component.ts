import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Techs } from '../../../myTechs.type';

@Component({
  selector: 'app-tech-detail',
  templateUrl: './tech-detail.component.html',
  styleUrl: './tech-detail.component.css'
})
export class TechDetailComponent implements OnInit{

@Input() techDetails: Techs | null = null;
@Output() closeModalEvent = new EventEmitter<void>();

title:string="";
summary:string="";

ngOnInit(): void {
    if(this.techDetails?.id == 1){
      this.title = "Angular"
      this.summary = "Page under construction, I should add a summary of my Angular knowledge soon."
    }
    if(this.techDetails?.id == 2){
      this.title = "Java"
      this.summary = "Page under construction, I should add a summary of my Java knowledge soon."
    }
    if(this.techDetails?.id == 3){
      this.title = "Spring"
      this.summary = "Page under construction, I should add a summary of my Spring knowledge soon."
    }
    if(this.techDetails?.id == 4){
      this.title = "Kafka"
      this.summary = "Page under construction, I should add a summary of my Kafka knowledge soon."
    }
    if(this.techDetails?.id == 5){
      this.title = "Oracle"
      this.summary = "Page under construction, I should add a summary of my Oracle knowledge soon."
    }
    if(this.techDetails?.id == 6){
      this.title = "Docker"
      this.summary = "Page under construction, I should add a summary of my Docker knowledge soon."
    }
  }

  onClose() {
    this.closeModalEvent.emit(); // Adicione este método
  }
}
