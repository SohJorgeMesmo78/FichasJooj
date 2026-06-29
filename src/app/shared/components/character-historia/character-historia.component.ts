import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CharacterService, CharacterConfig } from '../../services/character.service';

@Component({
  selector: 'app-character-historia',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './character-historia.component.html',
  styleUrl: './character-historia.component.scss'
})
export class CharacterHistoriaComponent implements OnInit, OnDestroy {
  config!: CharacterConfig;
  steps: any[] = [];
  currentStepIndex = 0;
  originalBodyClass = '';

  constructor(
    private route: ActivatedRoute,
    private charService: CharacterService
  ) {}

  ngOnInit() {
    if (typeof document !== 'undefined') {
      this.originalBodyClass = document.body.className;
    }
    
    const characterId = this.route.snapshot.data['characterId'];
    this.config = this.charService.getCharacterConfig(characterId);
    this.steps = this.charService.getCharacterHistory(characterId);
    
    this.applyTheme();
  }

  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      document.body.className = this.originalBodyClass;
    }
  }

  get currentStep(): any {
    return this.steps[this.currentStepIndex];
  }

  goToStep(index: number) {
    if (index >= 0 && index < this.steps.length) {
      this.currentStepIndex = index;
      this.applyTheme();
      this.scrollToTop();
    }
  }

  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.applyTheme();
      this.scrollToTop();
    }
  }

  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.applyTheme();
      this.scrollToTop();
    }
  }

  applyTheme() {
    if (typeof document !== 'undefined') {
      if (this.config.id === 'kairo') {
        const estacao = this.currentStep?.estacao || 'primavera';
        document.body.className = `kairo-theme theme-${estacao}`;
      } else {
        document.body.className = this.config.themeClass;
      }
    }
  }

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
