import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-classe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.scss'
})
export class ClasseComponent implements OnInit {
  showSubclass = false;

  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.body.className = 'kosj-theme';
    }
  }

  toggleSubclass() {
    this.showSubclass = !this.showSubclass;
  }
}
