import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { PetDisplay } from '../pet/pet-display/pet-display'; 
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-main-page',
  standalone: true, 
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
  imports: [PetDisplay, CommonModule],
})
export class MainPage implements OnInit, OnDestroy {
  
  happyProgressBar = signal(100);
  hugryprogressBar = signal(70);
  temperatureprogressBar = signal(50);

  private happyCountSub!: Subscription;
  private hugryCountSub!: Subscription;
  private temperatureCountSub!: Subscription;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.stopCountdown();
  }

  startCountdown(): void {
     this.happyCountSub = interval(1000).subscribe(() => {
      if (this.happyProgressBar() > 0) {
        this.happyProgressBar.update((v: any) => v - 1);
      } else {
        this.stopCountdown();
      }
    });

    this.hugryCountSub = interval(1000).subscribe(() => {
      if (this.hugryprogressBar() > 0) {
        this.hugryprogressBar.update((v: any) => v - 1);
      } else {
        this.stopCountdown();
      }
    });

    this.temperatureCountSub = interval(1000).subscribe(() => {
      if (this.temperatureprogressBar() > 0) {
        this.temperatureprogressBar.update((v: any) => v - 1);
      } else {
        this.stopCountdown();
      }
    });
  }

  stopCountdown(): void {
    if (this.happyCountSub) {
      this.happyCountSub.unsubscribe();
    }

    if(this.hugryCountSub) {
        this.hugryCountSub.unsubscribe();
    }

    if(this.temperatureCountSub) {
        this.temperatureCountSub.unsubscribe();
    }
  }

  updateProgressClass(progressValue: number): string {
    if (progressValue > 50) {
      return 'bg-success';
    } else if (progressValue <= 25) {
      return 'bg-danger';
    } else {
      return 'bg-warning';
    }
  }

  addTimeOnProgress(signal: WritableSignal<number>, timeValue: number): void {    
    signal.update(v => Math.max(0, Math.min(v + timeValue, 100)));
  }

}
