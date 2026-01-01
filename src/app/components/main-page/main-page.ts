import { Component } from '@angular/core';


@Component({
  selector: 'app-main-page',
  standalone: true, 
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  isAlive: boolean = false;
  isAnimating: boolean = false;

}
