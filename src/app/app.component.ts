import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@Component({
  imports: [CommonModule, FooterComponent, MainComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'huddle-landing-page-with-a-single-introductory-section';
}
