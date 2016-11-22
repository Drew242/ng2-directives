import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private switch: boolean = true;

  private items: number[] = [1, 2, 3, 4, 5];

  private value:number = 100;

  onSwitch() {
    this.switch = !this.switch;
  }
}
