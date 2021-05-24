import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  inactiveToActiveCounter: number;
  activeToInactiveCounter: number;

  constructor() {
    this.activeToInactiveCounter = 0;
    this.inactiveToActiveCounter = 0;
  }

  inactiveToActiveIncrementation() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to active: ' + this.inactiveToActiveCounter);
  }

  activeToInactiveIncrementation() {
    this.activeToInactiveCounter++;
    console.log('Active to inactive: ' + this.activeToInactiveCounter);
  }
}
