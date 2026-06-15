import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  toastMessage: string | null = null;
  toastTimeout: any;

  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.body.className = 'kosj-theme';
    }
  }

  showConstructionToast() {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    
    this.toastMessage = "Página em construção! Em breve terão mais histórias aqui. 🐉";
    
    this.toastTimeout = setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }
}
