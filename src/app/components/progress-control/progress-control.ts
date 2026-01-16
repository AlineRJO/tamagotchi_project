import { CommonModule } from '@angular/common';
import { Component, computed, input, OnDestroy, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-progress-control',
  imports: [CommonModule],
  templateUrl: './progress-control.html',
  styleUrl: './progress-control.scss',
})
export class ProgressControl implements OnDestroy{
  
  initialValue = input<number>(100);
  progressLabel = input<string>();

  private progressCountSub!: Subscription;

  ngOnDestroy(): void {
    this.stopCountdown();
  }

  updateProgressClass = computed(() => {
    const value = this.initialValue();

    if (value > 50) return 'bg-success';
    if (value <= 25) return 'bg-danger';
    return 'bg-warning';
  });

  private stopCountdown() {
     if (this.progressCountSub) {
      this.progressCountSub.unsubscribe();
    }
  }
}
