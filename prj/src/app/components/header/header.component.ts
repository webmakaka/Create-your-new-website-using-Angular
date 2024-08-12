import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  header = {
    title: 'SUCCESS',
    description:
      'Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
    url: 'http://localhost',
    buttonText: 'START CREATING TODAY',
  };
}
