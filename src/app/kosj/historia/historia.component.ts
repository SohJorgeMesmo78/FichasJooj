import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HISTORIA_DATA, HistoriaStep } from './historia.data';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.scss'
})
export class HistoriaComponent implements OnInit, OnDestroy {
  steps: HistoriaStep[] = HISTORIA_DATA;
  currentStepIndex = 0;
  originalBodyClass = '';

  ngOnInit() {
    if (typeof document !== 'undefined') {
      this.originalBodyClass = document.body.className;
    }
    this.applyTheme();
  }

  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      document.body.className = this.originalBodyClass;
    }
  }

  get currentStep(): HistoriaStep {
    return this.steps[this.currentStepIndex];
  }

  goToStep(index: number) {
    if (index >= 0 && index < this.steps.length) {
      this.currentStepIndex = index;
      this.scrollToTop();
    }
  }

  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.scrollToTop();
    }
  }

  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.scrollToTop();
    }
  }

  applyTheme() {
    if (typeof document !== 'undefined') {
      document.body.className = 'kosj-theme';
    }
  }

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

