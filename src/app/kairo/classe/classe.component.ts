import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-classe',
  imports: [RouterLink],
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.scss'
})
export class ClasseComponent implements OnInit {
  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.body.className = 'kairo-theme';
    }
  }
}
