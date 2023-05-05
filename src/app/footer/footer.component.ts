import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
// import {
//   faInstagram,
//   faFacebook,
//   faTwitter,
// } from '@fortawesome/free-brands-svg-icons';

@Component({
  imports: [CommonModule,  MatIconModule],
  selector: 'app-footer',
  standalone: true,
  styleUrls: ['./footer.component.css'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  // icons = [faFacebook, faTwitter, faInstagram];
}
