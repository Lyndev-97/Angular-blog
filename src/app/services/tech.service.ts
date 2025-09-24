// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { Techs } from '../myTechs.type';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  private techs: Techs[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Java'},
    { id: 3, name: 'Spring'},
    { id: 4, name: 'Kafka'},
    { id: 5, name: 'Oracla-dataBase'},
    { id: 6, name: 'Docker'}
  ];

  constructor() { }

  getTechById(id: number): Techs | null {
    const TechFound = this.techs.find(tech => tech.id === id);
    return TechFound ? TechFound : null;
  }
}