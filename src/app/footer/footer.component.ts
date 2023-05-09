import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  selector: 'app-footer',
  standalone: true,
  styleUrls: ['./footer.component.css'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socialIcons = [`facebook-f`, `twitter`, `instagram`];
}
