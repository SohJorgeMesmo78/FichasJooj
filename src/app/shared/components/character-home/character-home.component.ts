import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CharacterService, CharacterConfig } from '../../services/character.service';

@Component({
  selector: 'app-character-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './character-home.component.html',
  styleUrl: './character-home.component.scss'
})
export class CharacterHomeComponent implements OnInit {
  config!: CharacterConfig;

  constructor(
    private route: ActivatedRoute,
    private charService: CharacterService
  ) {}

  ngOnInit() {
    const characterId = this.route.snapshot.data['characterId'];
    this.config = this.charService.getCharacterConfig(characterId);
    
    if (typeof document !== 'undefined') {
      document.body.className = this.config.themeClass;
    }
  }
}
