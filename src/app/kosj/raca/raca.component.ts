import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-raca',
  imports: [RouterLink],
  templateUrl: './raca.component.html',
  styleUrl: './raca.component.scss'
})
export class RacaComponent implements OnInit {
  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.body.className = 'kosj-theme';
    }
  }
}
