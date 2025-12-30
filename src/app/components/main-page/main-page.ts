import { Component } from '@angular/core';
// import { NgStyle } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { NgStyle } from '@angular/common'; 

@Component({
  selector: 'app-main-page',
  standalone: true, 
  imports: [NgStyle],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  isAlive: boolean = false;
  isAnimating: boolean = false;

}
