import { Component } from '@angular/core';
import { PetDisplay } from '../pet/pet-display/pet-display'; 


@Component({
  selector: 'app-main-page',
  standalone: true, 
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
  imports: [PetDisplay],
})
export class MainPage {


}
