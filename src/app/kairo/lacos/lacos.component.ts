import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lacos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lacos.component.html',
  styleUrl: './lacos.component.scss'
})
export class LacosComponent implements OnInit {
  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.body.className = 'kairo-theme';
    }
  }
}
