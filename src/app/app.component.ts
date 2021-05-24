import {Component, OnInit} from '@angular/core';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  inactiveToActiveCounter: number;
  activeToInactiveCounter: number;

  constructor(private counterService: CounterService) {
  }

  ngOnInit() {
    this.inactiveToActiveCounter = this.counterService.inactiveToActiveCounter;
    this.activeToInactiveCounter = this.counterService.activeToInactiveCounter;
    console.log('On init');
  }

}
